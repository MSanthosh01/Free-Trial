import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Alphanumeric String
 * description: Generate random alphanumeric string of length ${length} and store in $[randomString]
 * actionType: custom_generate_alphanumeric
 * context: shared
 * needsLocator: false
 * category: Data Generation
 */
export async function generateAlphanumeric(ctx: WalnutContext) {
  // ctx.args[0] = length (from ${length})
  // ctx.args[1] = variable name (from $[randomString])
  const length = parseInt(ctx.args[0], 10);
  const varName = ctx.args[1];
  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  ctx.log(`Generated alphanumeric string: ${result}`);
  ctx.setVariable(varName, result);
}
