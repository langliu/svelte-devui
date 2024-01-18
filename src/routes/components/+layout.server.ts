import { getAllSnippets } from '$utils/code';
export const prerender = true;

export const load = async () => {
  const codes = await getAllSnippets();
  console.log(codes);
  return { codes };
};
