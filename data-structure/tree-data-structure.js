/*
 * Copyright (C) 2023-2024 Reyadeyat
 * All Rights Reserved.
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://reyadeyat.net/LICENSE/REYADEYAT.LICENSE
 * 
 * This License permits the use, modification, and distribution of the code
 * under the terms specified in the License document.
 */

"use strict";

export class TreeDataStructure {

    static tree_inlist(tree, tree_map, list) {
        let stack = [];
        for (let i = 0; i < tree.length; i++) {
            stack.push(tree[i]);
        }
        do {
            let node = stack.shift();
            list.push(node);
            if (node.children != null) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    let child_node = node.children[i];
                    child_node.node_parent = node;
                    stack.unshift(child_node);
                }
            }
        } while (stack.length > 0);
        if (tree_map != null) {
            list.forEach(node => {
                tree_map.set(node.node_id, node);
            });
        }
    }

    static list_intree(list, tree, tree_map) {
        let stack = [...list];
        //tree_map = new Map(list.map(node => [node.node_id, node]));
        if (tree_map != null) {
            tree_map.clear();
            list.forEach(node => {
                tree_map.set(node.node_id, node);
            });
        }
        do {
            let node = stack.shift();
            if (node.node_parent_id == null) {
                tree.push(node);
            }
            if (node.node_parent_id != null) {
                let node_parent = tree_map.get(node.node_parent_id);
                node_parent.children = node_parent.children == null ? [] : node_parent.children;
                node_parent.children.push(node);
                node.node_parent = node_parent;
            }
        } while (stack.length > 0);
    }

    static jsonable_tree(tree, jsonable_tree) {
        let stack = [];
        for (let i = 0; i < tree.length; i++) {
            stack.push(tree[i]);
        }
        do {
            let node = stack.shift();
            jsonable_tree.push(node);
            if (node.children != null) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    let child_node = node.children[i];
                    child_node.node_parent = null;
                    stack.unshift(child_node);
                }
            }
        } while (stack.length > 0);
    }
}
