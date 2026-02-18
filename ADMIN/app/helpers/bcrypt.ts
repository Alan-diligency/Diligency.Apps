import bcrypt from 'bcryptjs';

export const JWT_SECRET: string = "68def14c4a4sdd761bT29"
/**
 * Generate a salted hash of a password (synchronous version)
 * @param password Plain text password
 * @returns Hashed password
 */
export const generateSaltedPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10); // 10 rounds of salt
    return bcrypt.hashSync(password, salt);
};

/**
 * Generate a salted hash of a password (asynchronous version)
 * @param password Plain text password
 * @returns Promise resolving to hashed password
 */
export const generateSaltedPasswordAsync = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};