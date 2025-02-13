import { setGlobalDispatcher, EnvHttpProxyAgent } from 'undici'

const emitWarning = process.emitWarning;
process.emitWarning = () => undefined;

setGlobalDispatcher(new EnvHttpProxyAgent())

process.emitWarning = emitWarning;
