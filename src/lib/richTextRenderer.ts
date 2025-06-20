import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { Document } from '@contentful/rich-text-types';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

/**
 * Custom options for rendering Contentful Rich Text
 * @param className Optional class name to apply to the container
 * @returns HTML string with custom styling applied
 */
export function renderRichText(document: Document, className: string = '') {
  // Define custom rendering options
  const options = {
    renderNode: {
      // Add custom classes to block elements
      [BLOCKS.PARAGRAPH]: (node: any, next: any) => 
        `<p class="mb-6 leading-relaxed">${next(node.content)}</p>`,
      
      [BLOCKS.HEADING_1]: (node: any, next: any) => 
        `<h1 class="text-4xl font-bold mb-6">${next(node.content)}</h1>`,
      
      [BLOCKS.HEADING_2]: (node: any, next: any) => 
        `<h2 class="text-3xl font-bold mb-5">${next(node.content)}</h2>`,
      
      [BLOCKS.HEADING_3]: (node: any, next: any) => 
        `<h3 class="text-2xl font-semibold mb-4">${next(node.content)}</h3>`,
      
      [BLOCKS.HEADING_4]: (node: any, next: any) => 
        `<h4 class="text-xl font-semibold mb-3">${next(node.content)}</h4>`,
      
      [BLOCKS.HEADING_5]: (node: any, next: any) => 
        `<h5 class="text-lg font-semibold mb-2">${next(node.content)}</h5>`,
      
      [BLOCKS.HEADING_6]: (node: any, next: any) => 
        `<h6 class="text-base font-semibold mb-2">${next(node.content)}</h6>`,
      
      [BLOCKS.UL_LIST]: (node: any, next: any) => 
        `<ul class="list-disc ml-6 mb-6 space-y-2">${next(node.content)}</ul>`,
      
      [BLOCKS.OL_LIST]: (node: any, next: any) => 
        `<ol class="list-decimal ml-6 mb-6 space-y-2">${next(node.content)}</ol>`,
      
      [BLOCKS.LIST_ITEM]: (node: any, next: any) => 
        `<li class="pl-2">${next(node.content)}</li>`,
      
      [BLOCKS.QUOTE]: (node: any, next: any) => 
        `<blockquote class="border-l-4 border-pumpkin-500 pl-4 py-2 italic mb-6">${next(node.content)}</blockquote>`,
      
      [BLOCKS.HR]: () => 
        `<hr class="my-8 border-t border-gray-300">`,
      
      // Handle links
      [INLINES.HYPERLINK]: (node: any, next: any) => 
        `<a href="${node.data.uri}" class="text-h2o-blue hover:underline" target="${node.data.uri.startsWith('http') ? '_blank' : '_self'}" rel="${node.data.uri.startsWith('http') ? 'noopener noreferrer' : ''}">${next(node.content)}</a>`,
    },
    renderMark: {
      [MARKS.BOLD]: (text: string) => `<strong class="font-bold">${text}</strong>`,
      [MARKS.ITALIC]: (text: string) => `<em class="italic">${text}</em>`,
      [MARKS.UNDERLINE]: (text: string) => `<span class="underline">${text}</span>`,
      [MARKS.CODE]: (text: string) => `<code class="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">${text}</code>`,
    }
  };

  // Generate the HTML with custom classes
  const html = documentToHtmlString(document, options);
  
  // If a className is provided, wrap the HTML in a div with that class
  if (className) {
    return `<div class="${className}">${html}</div>`;
  }
  
  return html;
}
