import { ProgramNode } from '../interfaces/program-node'

interface IProps {
  // This identifier should correspond with the URL route /:id
  id?: string
}

interface IValue {
  // currentNode - The selected node within the location tree.
  currentNode?: ProgramNode
  // tree - The tree of that will be shown.
  tree?: ProgramNode
}

export const useFetchProgramTree = ({id}: IProps = {}): IValue => {
  /* 
   * TODO: Fetch the program tree
   *
   * 1. Fetch the program tree using fetchProgramTree
   * 2. Find the node with prop "id" using findNode
   */
  return {
    
  }
}

export default useFetchProgramTree