import { LocationTree } from '../components/LocationTree/LocationTree'

export const ManageLocations = () => {
  /* 
   * TODO: Get the tree and current node
   * 1. Leverage the useFetchProgramTree to retrieve the tree and current node
   * 2. Pass the tree and node to LocationTree component
   * 3. Display the name and description of the current node in h1 and p tags
  */
  return (
    <div className="container my-5">
      <div className="row">
        <div className="scrollable-container col-md-4">
          <LocationTree />
        </div>
        <div className="col-md-8">
          <div className="details my-5">
            <h1 className="mb-3">CanadaSport</h1>
            <p>
              We work to ensure that no kid is ever left watching from the sidelines..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageLocations