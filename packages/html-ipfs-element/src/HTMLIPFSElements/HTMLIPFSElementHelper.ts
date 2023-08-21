// import { CID } from 'multiformats/cid'

// //
// export default class HTMLIPFSElementHelper {

//   // 監視する属性 - attributeChangedCallback が呼ばれる
//   static get observedAttributes() {
//     return ['cid', 'mediatype'];
//   }

//   constructor() {
//     super();
//     console.debug("HTMLIPFSElement constructor")
//   }

//   connectedCallback() {
//     this.ifNeedCallCidAttributeChangedCallback();
//   }

//   attributeChangedCallback(name: string | number, oldValue: string, newValue: string) {
//     if (name === 'cid' && newValue) {
//       this.ifNeedCallCidAttributeChangedCallback();
//     }
//   }

//   // attributeの cid が設定されたら parse して変数を設定する
//   ifNeedCallCidAttributeChangedCallback() {
//     const cid_attr = this.getAttribute('cid');
//     if (!cid_attr) {
//       console.debug('Waiting for cid');
//       return
//     }

//     try {
//       const cid = CID.parse(cid_attr);
//       this.cidAttributeChangedCallback(cid)
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   // cid が設定されたら呼ばれる
//   cidAttributeChangedCallback(cid: CID) {
//     throw new Error('need override cidAttributeChangedCallback')
//   }

//   // 
//   static async fetchBlob(cid: CID, mediatype: string): Promise<Blob | null>  {
//     const unixFs = HTMLIPFSConfigElement.unixFs;
//     if(unixFs === null) return null;

//     const content = [];
//     for await (const chunk of unixFs.cat(cid)) {
//       content.push(chunk);
//     }
  
//     return new Blob(content, { type: mediatype });
//   }
// }