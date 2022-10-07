import { ProgramNode } from '../../interfaces/program-node'

interface IProps {
  // currentNode - The selected node within the location tree.
  currentNode?: ProgramNode
  // tree - The tree of that will be shown.
  tree?: ProgramNode
}

export const LocationTree = ({ currentNode, tree }: IProps = {}) => {
  return (
    <ul>
      {/* 
        * TODO: Display Program's Location Tree
        *
        * 1. Display the name of the location
        * 2. Indent the location deeper the tree
        * 3. Add an icon using React FontAwesomeIcon - https://fontawesome.com/docs/web/use-with/react/add-icons#add-individual-icons-explicitly
        * - program -> faGlobe
        * - region -> faLayerGroup
        * - chapter -> faMapMarkerAlt
        * 4. Highlight the current node
        * 5. Display the location count on all nodes expect location nodes 
        */}
    </ul>
  )
}

export default LocationTree