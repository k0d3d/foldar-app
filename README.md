### Folder and File notes Structure Notes
#### Queries
Queries use React Query to handle request to APIs using methods in UseCases
#### UseCases
Use-cases are split into two types. Query and Mutations. These are specific business operations that need to be carried out by the user. eg. Add Item, Update Order, Delete Supplier. Use cases handle sending the request, error handling, language selection and notification. 
#### Request Factories
These are glorified services using an authenticated Axios instance to make calls to the API backend.

#### Dispatch Handlers
To enable sharing state between components and also sharing methods that interact with state, we use dispatch handlers. 
Dispatch handlers can make async actions like requests by using UseCases. 
 