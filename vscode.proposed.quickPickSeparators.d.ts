/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'vscode' {

	// https://github.com/microsoft/vscode/issues/74967

	export enum QuickPickItemKind {
		Default = 1,
		Separator = 2,
	}

	export interface QuickPickItem {
		kind?: QuickPickItemKind
	}
}
