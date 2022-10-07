import { ProgramNode } from '../interfaces/program-node'

export const findChapterCount = (node: ProgramNode): number => {
  /* 
   *  TODO: Count how many chapter nodes within a program location node
   *
   * 1. A node with the type of `chapter` should count as one. If the node is a `chapter`, it can be assumed that there are no children nodes.
   * 2. Count all the children nodes within the tree with type of `chapter` within the program tree.
   */
  return 0
}
