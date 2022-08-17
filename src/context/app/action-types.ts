

const actionsList = {


}

export type ActionList = keyof typeof actionsList

export type RootActionType = {
  payload?: any,
  type: ActionList
}

export default {
  ...actionsList

}
