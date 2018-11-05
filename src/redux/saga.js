import { all } from 'redux-saga/effects'
import { saga as searchSaga } from '../ducks/search'
import { saga as channelSearchSaga } from '../ducks/channels'
import { saga as storageSaga } from '../ducks/storage'

export default function*() {
  yield all([searchSaga(), channelSearchSaga(), storageSaga()])
}
