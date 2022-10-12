import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'catalogo',
	webDir: 'www',
	bundledWebRuntime: false,
	server: { allowNavigation: ['https://ferreacerovalencia.com.ve/'] },
};

export default config;
