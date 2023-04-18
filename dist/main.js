var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GitHubSodiumSealer_publicKeyBuffer;
import libsodium from "libsodium-wrappers";
await libsodium.ready;
/**
 * @class GitHubSodiumSealer
 * @description Encrypt value to GitHub secret value.
 */
class GitHubSodiumSealer {
    /**
     * @constructor
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     */
    constructor(publicKey) {
        _GitHubSodiumSealer_publicKeyBuffer.set(this, void 0);
        if (typeof publicKey !== "string") {
            throw new TypeError(`Argument \`publicKey\` must be type of string!`);
        }
        if (!(publicKey.length > 0)) {
            throw new Error(`Argument \`publicKey\` must be a string which is non-empty!`);
        }
        __classPrivateFieldSet(this, _GitHubSodiumSealer_publicKeyBuffer, Buffer.from(publicKey, "base64"), "f");
    }
    /**
     * @method encrypt
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    encrypt(value) {
        if (typeof value !== "string") {
            throw new TypeError(`Argument \`value\` must be type of string!`);
        }
        if (!(value.length > 0)) {
            throw new Error(`Argument \`value\` must be a string which is non-empty!`);
        }
        return Buffer.from(libsodium.crypto_box_seal(Buffer.from(value), __classPrivateFieldGet(this, _GitHubSodiumSealer_publicKeyBuffer, "f"))).toString("base64");
    }
    /**
     * @static seal
     * @description Encrypt value to GitHub secret value.
     * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
     * @param {string} value Value that need to encrypt as secret value.
     * @returns {string} An encrypted GitHub secret value.
     */
    static seal(publicKey, value) {
        return new this(publicKey).encrypt(value);
    }
}
_GitHubSodiumSealer_publicKeyBuffer = new WeakMap();
/**
 * @function seal
 * @description Encrypt value to GitHub secret value.
 * @param {string} publicKey Organization's or repository's public key, which need for encrypt value to secret value before create or update a secret.
 * @param {string} value Value that need to encrypt as secret value.
 * @returns {string} An encrypted GitHub secret value.
 */
function seal(publicKey, value) {
    return new GitHubSodiumSealer(publicKey).encrypt(value);
}
export { GitHubSodiumSealer, seal };
export default {
    GitHubSodiumSealer,
    seal
};
