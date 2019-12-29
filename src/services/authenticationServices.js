import { delay } from 'redux-saga/effects';

export default function* () {
    yield delay(2000);

    return {
        isUserAuthenticated: true,
    }
}
