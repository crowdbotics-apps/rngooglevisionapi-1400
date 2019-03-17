var environments = {
	staging: {
		FIREBASE_API_KEY: 'AIzaSyBNVGTSNprnxeECDP8IP3HvbLSL0qK0FYk',
		FIREBASE_AUTH_DOMAIN: 'rnfirebase-e2de1.firebaseapp.com',
		FIREBASE_DATABASE_URL: 'https://rnfirebase-e2de1.firebaseio.com',
		FIREBASE_PROJECT_ID: 'rnfirebase-e2de1',
		FIREBASE_STORAGE_BUCKET: 'rnfirebase-e2de1.appspot.com',
		FIREBASE_MESSAGING_SENDER_ID: '670572703564',
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyBvldro2gzVZRJ1bebV4i8PJIWWaM0kNV4'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
