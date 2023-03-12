
import { Notify } from 'quasar'
import { Loading } from 'quasar'

export const showLoading = function (message = 'Some important process  is in progress. Hang on...') {
    Loading.show({
        message
    });
}

export const showNotfy = function (message = 'Danger, Will Robinson! Danger!') {
    Notify.create({
        message,
    })
}
