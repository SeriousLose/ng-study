import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, SchematicsException, Tree, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema as AddOptions } from './schema';

let projectWorkspace: {
  root: string;
  sourceRoot: string;
  defaultProject: string;
};

export type packgeType = 'dependencies' | 'devDependencies' | 'scripts';
export const PACKAGES_I18N = ['@devui-design/icons@^1.2.0', '@ngx-translate/core@^13.0.0', '@ngx-translate/http-loader@^6.0.0', 'ng-devui@^11.1.0'];
export const PACKAGES = ['@devui-design/icons@^1.2.0', 'ng-devui@^11.1.0'];
export const PACKAGE_JSON_PATH = 'package.json';
export const ANGULAR_JSON_PATH = 'angular.json';

export default function (options: AddOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // 获取项目空间中我们需要的相关变量
    getWorkSpace(tree);

    // 根据是否选择i18n插入不同的packages
    const packages = options.i18n ? PACKAGES_I18N : PACKAGES;
    addPackage(tree, packages, 'dependencies');

    // 执行 npm install
    context.addTask(new NodePackageInstallTask());

    // 自定义的一系列 Rules
    return chain([removeOriginalFiles(), addSourceFiles(options)]);
  };
}

// getWorkSpace
function getWorkSpace(tree: Tree) {
  let angularJSON;
  let buffer = tree.read(ANGULAR_JSON_PATH);
  if (buffer) {
    angularJSON = JSON.parse(buffer.toString());
  } else {
    throw new SchematicsException('Please make sure the project is an Angular project.');
  }

  let defaultProject = angularJSON.defaultProject;
  projectWorkspace = {
    root: '/',
    sourceRoot: angularJSON.projects[defaultProject].sourceRoot,
    defaultProject,
  };

  return projectWorkspace;
}
// removeOriginalFiles
// 根据自己的需要选择需要删除的文件
function removeOriginalFiles() {
  return (tree: Tree) => {
    [
      `${projectWorkspace.sourceRoot}/app/app.component.ts`,
      `${projectWorkspace.sourceRoot}/app/app.component.html`,
      `${projectWorkspace.sourceRoot}/app/app.component.scss`,
      `${projectWorkspace.sourceRoot}/app/app.component.css`,
    ]
      .filter((f) => tree.exists(f))
      .forEach((f) => tree.delete(f));
  };
}

// addSourceFiles
function addSourceFiles(options: AddOptions): Rule {
  return chain([
    mergeWith(
      apply(url('./files'), [
        applyTemplates({
          defaultLanguage: options.defaultLanguage,
        }),
        move(`${projectWorkspace.sourceRoot}/app`),
      ])
    ),
  ]);
}
// readJson
function readJson(tree: Tree, file: string, type?: string): any {
  if (!tree.exists(file)) {
    return null;
  }

  const sourceFile = tree.read(file)!.toString('utf-8');
  try {
    const json = JSON.parse(sourceFile);
    if (type && !json[type]) {
      json[type] = {};
    }
    return json;
  } catch (error) {
    console.log(`Failed when parsing file ${file}.`);
    throw error;
  }
}

// writeJson
export function writeJson(tree: Tree, file: string, source: any): void {
  tree.overwrite(file, JSON.stringify(source, null, 2));
}

// readPackageJson
function readPackageJson(tree: Tree, type?: string): any {
  return readJson(tree, PACKAGE_JSON_PATH, type);
}

// writePackageJson
function writePackageJson(tree: Tree, json: any): any {
  return writeJson(tree, PACKAGE_JSON_PATH, json);
}

// addPackage
function addPackage(tree: Tree, packages: string | string[], type: packgeType = 'dependencies'): Tree {
  const packageJson = readPackageJson(tree, type);

  if (packageJson == null) {
    return tree;
  }

  if (!Array.isArray(packages)) {
    packages = [packages];
  }
  packages.forEach((pck) => {
    const splitPosition = pck.lastIndexOf('@');
    packageJson[type][pck.substr(0, splitPosition)] = pck.substr(splitPosition + 1);
  });

  writePackageJson(tree, packageJson);
  return tree;
}
