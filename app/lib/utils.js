import  bcrypt  from 'bcryptjs';

export async function saltAndHashPassword(password) {
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

console.log(saltAndHashPassword('password'));

export async function comparePasswordToHash(password, hash) {
  return await bcrypt.compare(password, hash);
}
