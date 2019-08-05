import _ from 'lodash'
export default function details( state= {
  detail: 'this is detail',
  loading: 'false'
}  , action ){
  switch( action.type ){
    case 'update_detail':
      return _.assign({}, state, {
        detail: action.data
      })
    default:
      return state;
  }

}