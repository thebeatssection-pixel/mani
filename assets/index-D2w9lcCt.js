(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="174",ji={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Mo=1,Pu=2,Ul=1,Du=2,Un=3,ei=0,Je=1,Nn=2,Qn=0,Yi=1,wo=2,To=3,Ao=4,Lu=5,mi=100,Iu=101,Uu=102,Nu=103,Fu=104,Ou=200,ku=201,Bu=202,zu=203,la=204,ca=205,Vu=206,Hu=207,Gu=208,Wu=209,Xu=210,$u=211,ju=212,Yu=213,qu=214,ua=0,ha=1,da=2,Ki=3,fa=4,pa=5,ma=6,_a=7,Nl=0,Zu=1,Ku=2,ti=0,Ju=1,Qu=2,th=3,eh=4,nh=5,ih=6,rh=7,Fl=300,Ji=301,Qi=302,ga=303,va=304,fs=306,xa=1e3,gi=1001,ya=1002,vn=1003,sh=1004,Dr=1005,En=1006,Rs=1007,vi=1008,Bn=1009,Ol=1010,kl=1011,_r=1012,to=1013,yi=1014,Fn=1015,yr=1016,eo=1017,no=1018,tr=1020,Bl=35902,zl=1021,Vl=1022,gn=1023,Hl=1024,Gl=1025,qi=1026,er=1027,Wl=1028,io=1029,Xl=1030,ro=1031,so=1033,ns=33776,is=33777,rs=33778,ss=33779,ba=35840,Sa=35841,Ea=35842,Ma=35843,wa=36196,Ta=37492,Aa=37496,Ca=37808,Ra=37809,Pa=37810,Da=37811,La=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,ka=37818,Ba=37819,za=37820,Va=37821,as=36492,Ha=36494,Ga=36495,$l=36283,Wa=36284,Xa=36285,$a=36286,ah=3200,oh=3201,jl=0,lh=1,Jn="",on="srgb",nr="srgb-linear",us="linear",xe="srgb",Di=7680,Co=519,ch=512,uh=513,hh=514,Yl=515,dh=516,fh=517,ph=518,mh=519,Ro=35044,Po="300 es",On=2e3,hs=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],os=Math.PI/180,ja=180/Math.PI;function br(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i,t){return(i%t+t)%t}function Ps(i,t,e){return(1-e)*i+e*t}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gh={DEG2RAD:os};class se{constructor(t=0,e=0){se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,r,s,a,o,l,u){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u)}set(t,e,n,r,s,a,o,l,u){const p=this.elements;return p[0]=t,p[1]=r,p[2]=o,p[3]=e,p[4]=s,p[5]=l,p[6]=n,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],p=n[4],d=n[7],m=n[2],h=n[5],x=n[8],g=r[0],f=r[3],c=r[6],E=r[1],M=r[4],w=r[7],D=r[2],N=r[5],I=r[8];return s[0]=a*g+o*E+l*D,s[3]=a*f+o*M+l*N,s[6]=a*c+o*w+l*I,s[1]=u*g+p*E+d*D,s[4]=u*f+p*M+d*N,s[7]=u*c+p*w+d*I,s[2]=m*g+h*E+x*D,s[5]=m*f+h*M+x*N,s[8]=m*c+h*w+x*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],p=t[8];return e*a*p-e*o*u-n*s*p+n*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],p=t[8],d=p*a-o*u,m=o*l-p*s,h=u*s-a*l,x=e*d+n*m+r*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return t[0]=d*g,t[1]=(r*u-p*n)*g,t[2]=(o*n-r*a)*g,t[3]=m*g,t[4]=(p*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=h*g,t[7]=(n*l-u*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new re;function ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){const i=ds("canvas");return i.style.display="block",i}const Do={};function fi(i){i in Do||(Do[i]=!0,console.warn(i))}function xh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function yh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Lo=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){const i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(r.r=kn(r.r),r.g=kn(r.g),r.b=kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?us:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:us,toXYZ:Lo,fromXYZ:Io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Lo,fromXYZ:Io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),i}const me=Sh();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class Eh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=ds("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=kn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mh=0;class ao{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ls(r[a].image)):s.push(Ls(r[a]))}else s=Ls(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wh=0;class Qe extends Mi{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=gi,r=gi,s=En,a=vi,o=gn,l=Bn,u=Qe.DEFAULT_ANISOTROPY,p=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=br(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xa:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xa:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Fl;Qe.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],p=l[4],d=l[8],m=l[1],h=l[5],x=l[9],g=l[2],f=l[6],c=l[10];if(Math.abs(p-m)<.01&&Math.abs(d-g)<.01&&Math.abs(x-f)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+g)<.1&&Math.abs(x+f)<.1&&Math.abs(u+h+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,w=(h+1)/2,D=(c+1)/2,N=(p+m)/4,I=(d+g)/4,O=(x+f)/4;return M>w&&M>D?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=N/n,s=I/n):w>D?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=N/r,s=O/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=I/s,r=O/s),this.set(n,r,s,e),this}let E=Math.sqrt((f-x)*(f-x)+(d-g)*(d-g)+(m-p)*(m-p));return Math.abs(E)<.001&&(E=1),this.x=(f-x)/E,this.y=(d-g)/E,this.z=(m-p)/E,this.w=Math.acos((u+h+c-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Qe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zl extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],u=n[r+1],p=n[r+2],d=n[r+3];const m=s[a+0],h=s[a+1],x=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=p,t[e+3]=d;return}if(o===1){t[e+0]=m,t[e+1]=h,t[e+2]=x,t[e+3]=g;return}if(d!==g||l!==m||u!==h||p!==x){let f=1-o;const c=l*m+u*h+p*x+d*g,E=c>=0?1:-1,M=1-c*c;if(M>Number.EPSILON){const D=Math.sqrt(M),N=Math.atan2(D,c*E);f=Math.sin(f*N)/D,o=Math.sin(o*N)/D}const w=o*E;if(l=l*f+m*w,u=u*f+h*w,p=p*f+x*w,d=d*f+g*w,f===1-o){const D=1/Math.sqrt(l*l+u*u+p*p+d*d);l*=D,u*=D,p*=D,d*=D}}t[e]=l,t[e+1]=u,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],p=n[r+3],d=s[a],m=s[a+1],h=s[a+2],x=s[a+3];return t[e]=o*x+p*d+l*h-u*m,t[e+1]=l*x+p*m+u*d-o*h,t[e+2]=u*x+p*h+o*m-l*d,t[e+3]=p*x-o*d-l*m-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),p=o(r/2),d=o(s/2),m=l(n/2),h=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=m*p*d+u*h*x,this._y=u*h*d-m*p*x,this._z=u*p*x+m*h*d,this._w=u*p*d-m*h*x;break;case"YXZ":this._x=m*p*d+u*h*x,this._y=u*h*d-m*p*x,this._z=u*p*x-m*h*d,this._w=u*p*d+m*h*x;break;case"ZXY":this._x=m*p*d-u*h*x,this._y=u*h*d+m*p*x,this._z=u*p*x+m*h*d,this._w=u*p*d-m*h*x;break;case"ZYX":this._x=m*p*d-u*h*x,this._y=u*h*d+m*p*x,this._z=u*p*x-m*h*d,this._w=u*p*d+m*h*x;break;case"YZX":this._x=m*p*d+u*h*x,this._y=u*h*d+m*p*x,this._z=u*p*x-m*h*d,this._w=u*p*d-m*h*x;break;case"XZY":this._x=m*p*d-u*h*x,this._y=u*h*d-m*p*x,this._z=u*p*x+m*h*d,this._w=u*p*d+m*h*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],p=e[6],d=e[10],m=n+o+d;if(m>0){const h=.5/Math.sqrt(m+1);this._w=.25/h,this._x=(p-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(p-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+p)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+p)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,p=e._w;return this._x=n*p+a*o+r*u-s*l,this._y=r*p+a*l+s*o-n*u,this._z=s*p+a*u+n*l-r*o,this._w=a*p-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-e;return this._w=h*a+e*this._w,this._x=h*n+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),p=Math.atan2(u,o),d=Math.sin((1-e)*p)/u,m=Math.sin(e*p)/u;return this._w=a*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,e=0,n=0){ct.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*n),p=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*u+a*d-o*p,this.y=n+l*p+o*u-s*d,this.z=r+l*d+s*p-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Is.copy(this).projectOnVector(t),this.sub(Is)}reflect(t){return this.sub(Is.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new ct,Uo=new Si;class Sr{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Ir.subVectors(this.max,hr),Ii.subVectors(t.a,hr),Ui.subVectors(t.b,hr),Ni.subVectors(t.c,hr),Xn.subVectors(Ui,Ii),$n.subVectors(Ni,Ui),oi.subVectors(Ii,Ni);let e=[0,-Xn.z,Xn.y,0,-$n.z,$n.y,0,-oi.z,oi.y,Xn.z,0,-Xn.x,$n.z,0,-$n.x,oi.z,0,-oi.x,-Xn.y,Xn.x,0,-$n.y,$n.x,0,-oi.y,oi.x,0];return!Us(e,Ii,Ui,Ni,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,Ii,Ui,Ni,Ir))?!1:(Ur.crossVectors(Xn,$n),e=[Ur.x,Ur.y,Ur.z],Us(e,Ii,Ui,Ni,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],fn=new ct,Lr=new Sr,Ii=new ct,Ui=new ct,Ni=new ct,Xn=new ct,$n=new ct,oi=new ct,hr=new ct,Ir=new ct,Ur=new ct,li=new ct;function Us(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){li.fromArray(i,s);const o=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=t.dot(li),u=e.dot(li),p=n.dot(li);if(Math.max(-Math.max(l,u,p),Math.min(l,u,p))>o)return!1}return!0}const Ch=new Sr,dr=new ct,Ns=new ct;class oo{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ch.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(dr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Ns)),this.expandByPoint(dr.copy(t.center).sub(Ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new ct,Fs=new ct,Nr=new ct,jn=new ct,Os=new ct,Fr=new ct,ks=new ct;class Kl{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fs.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Fs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=jn.dot(this.direction),l=-jn.dot(Nr),u=jn.lengthSq(),p=Math.abs(1-a*a);let d,m,h,x;if(p>0)if(d=a*l-o,m=a*o-l,x=s*p,d>=0)if(m>=-x)if(m<=x){const g=1/p;d*=g,m*=g,h=d*(d+a*m+2*o)+m*(a*d+m+2*l)+u}else m=s,d=Math.max(0,-(a*m+o)),h=-d*d+m*(m+2*l)+u;else m=-s,d=Math.max(0,-(a*m+o)),h=-d*d+m*(m+2*l)+u;else m<=-x?(d=Math.max(0,-(-a*s+o)),m=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+m*(m+2*l)+u):m<=x?(d=0,m=Math.min(Math.max(-s,-l),s),h=m*(m+2*l)+u):(d=Math.max(0,-(a*s+o)),m=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+m*(m+2*l)+u);else m=a>0?-s:s,d=Math.max(0,-(a*m+o)),h=-d*d+m*(m+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fs).addScaledVector(Nr,m),h}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const u=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(n=(t.min.x-m.x)*u,r=(t.max.x-m.x)*u):(n=(t.max.x-m.x)*u,r=(t.min.x-m.x)*u),p>=0?(s=(t.min.y-m.y)*p,a=(t.max.y-m.y)*p):(s=(t.max.y-m.y)*p,a=(t.min.y-m.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(o=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,s){Os.subVectors(e,t),Fr.subVectors(n,t),ks.crossVectors(Os,Fr);let a=this.direction.dot(ks),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(jn,Fr));if(l<0)return null;const u=o*this.direction.dot(Os.cross(jn));if(u<0||l+u>a)return null;const p=-o*jn.dot(ks);return p<0?null:this.at(p/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,r,s,a,o,l,u,p,d,m,h,x,g,f){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u,p,d,m,h,x,g,f)}set(t,e,n,r,s,a,o,l,u,p,d,m,h,x,g,f){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=p,c[10]=d,c[14]=m,c[3]=h,c[7]=x,c[11]=g,c[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Fi.setFromMatrixColumn(t,0).length(),s=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),p=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=a*p,h=a*d,x=o*p,g=o*d;e[0]=l*p,e[4]=-l*d,e[8]=u,e[1]=h+x*u,e[5]=m-g*u,e[9]=-o*l,e[2]=g-m*u,e[6]=x+h*u,e[10]=a*l}else if(t.order==="YXZ"){const m=l*p,h=l*d,x=u*p,g=u*d;e[0]=m+g*o,e[4]=x*o-h,e[8]=a*u,e[1]=a*d,e[5]=a*p,e[9]=-o,e[2]=h*o-x,e[6]=g+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*p,h=l*d,x=u*p,g=u*d;e[0]=m-g*o,e[4]=-a*d,e[8]=x+h*o,e[1]=h+x*o,e[5]=a*p,e[9]=g-m*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*p,h=a*d,x=o*p,g=o*d;e[0]=l*p,e[4]=x*u-h,e[8]=m*u+g,e[1]=l*d,e[5]=g*u+m,e[9]=h*u-x,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,h=a*u,x=o*l,g=o*u;e[0]=l*p,e[4]=g-m*d,e[8]=x*d+h,e[1]=d,e[5]=a*p,e[9]=-o*p,e[2]=-u*p,e[6]=h*d+x,e[10]=m-g*d}else if(t.order==="XZY"){const m=a*l,h=a*u,x=o*l,g=o*u;e[0]=l*p,e[4]=-d,e[8]=u*p,e[1]=m*d+g,e[5]=a*p,e[9]=h*d-x,e[2]=x*d-h,e[6]=o*p,e[10]=g*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ph)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Yn.crossVectors(n,rn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Yn.crossVectors(n,rn)),Yn.normalize(),Or.crossVectors(rn,Yn),r[0]=Yn.x,r[4]=Or.x,r[8]=rn.x,r[1]=Yn.y,r[5]=Or.y,r[9]=rn.y,r[2]=Yn.z,r[6]=Or.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],p=n[1],d=n[5],m=n[9],h=n[13],x=n[2],g=n[6],f=n[10],c=n[14],E=n[3],M=n[7],w=n[11],D=n[15],N=r[0],I=r[4],O=r[8],T=r[12],A=r[1],V=r[5],R=r[9],k=r[13],S=r[2],H=r[6],at=r[10],Z=r[14],nt=r[3],st=r[7],vt=r[11],X=r[15];return s[0]=a*N+o*A+l*S+u*nt,s[4]=a*I+o*V+l*H+u*st,s[8]=a*O+o*R+l*at+u*vt,s[12]=a*T+o*k+l*Z+u*X,s[1]=p*N+d*A+m*S+h*nt,s[5]=p*I+d*V+m*H+h*st,s[9]=p*O+d*R+m*at+h*vt,s[13]=p*T+d*k+m*Z+h*X,s[2]=x*N+g*A+f*S+c*nt,s[6]=x*I+g*V+f*H+c*st,s[10]=x*O+g*R+f*at+c*vt,s[14]=x*T+g*k+f*Z+c*X,s[3]=E*N+M*A+w*S+D*nt,s[7]=E*I+M*V+w*H+D*st,s[11]=E*O+M*R+w*at+D*vt,s[15]=E*T+M*k+w*Z+D*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],p=t[2],d=t[6],m=t[10],h=t[14],x=t[3],g=t[7],f=t[11],c=t[15];return x*(+s*l*d-r*u*d-s*o*m+n*u*m+r*o*h-n*l*h)+g*(+e*l*h-e*u*m+s*a*m-r*a*h+r*u*p-s*l*p)+f*(+e*u*d-e*o*h-s*a*d+n*a*h+s*o*p-n*u*p)+c*(-r*o*p-e*l*d+e*o*m+r*a*d-n*a*m+n*l*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],p=t[8],d=t[9],m=t[10],h=t[11],x=t[12],g=t[13],f=t[14],c=t[15],E=d*f*u-g*m*u+g*l*h-o*f*h-d*l*c+o*m*c,M=x*m*u-p*f*u-x*l*h+a*f*h+p*l*c-a*m*c,w=p*g*u-x*d*u+x*o*h-a*g*h-p*o*c+a*d*c,D=x*d*l-p*g*l-x*o*m+a*g*m+p*o*f-a*d*f,N=e*E+n*M+r*w+s*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return t[0]=E*I,t[1]=(g*m*s-d*f*s-g*r*h+n*f*h+d*r*c-n*m*c)*I,t[2]=(o*f*s-g*l*s+g*r*u-n*f*u-o*r*c+n*l*c)*I,t[3]=(d*l*s-o*m*s-d*r*u+n*m*u+o*r*h-n*l*h)*I,t[4]=M*I,t[5]=(p*f*s-x*m*s+x*r*h-e*f*h-p*r*c+e*m*c)*I,t[6]=(x*l*s-a*f*s-x*r*u+e*f*u+a*r*c-e*l*c)*I,t[7]=(a*m*s-p*l*s+p*r*u-e*m*u-a*r*h+e*l*h)*I,t[8]=w*I,t[9]=(x*d*s-p*g*s-x*n*h+e*g*h+p*n*c-e*d*c)*I,t[10]=(a*g*s-x*o*s+x*n*u-e*g*u-a*n*c+e*o*c)*I,t[11]=(p*o*s-a*d*s-p*n*u+e*d*u+a*n*h-e*o*h)*I,t[12]=D*I,t[13]=(p*g*r-x*d*r+x*n*m-e*g*m-p*n*f+e*d*f)*I,t[14]=(x*o*r-a*g*r-x*n*l+e*g*l+a*n*f-e*o*f)*I,t[15]=(a*d*r-p*o*r+p*n*l-e*d*l-a*n*m+e*o*m)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,u=s*a,p=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,p*o+n,p*l-r*a,0,u*l-r*o,p*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,p=a+a,d=o+o,m=s*u,h=s*p,x=s*d,g=a*p,f=a*d,c=o*d,E=l*u,M=l*p,w=l*d,D=n.x,N=n.y,I=n.z;return r[0]=(1-(g+c))*D,r[1]=(h+w)*D,r[2]=(x-M)*D,r[3]=0,r[4]=(h-w)*N,r[5]=(1-(m+c))*N,r[6]=(f+E)*N,r[7]=0,r[8]=(x+M)*I,r[9]=(f-E)*I,r[10]=(1-(m+g))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const a=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const u=1/s,p=1/a,d=1/o;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=p,pn.elements[5]*=p,pn.elements[6]*=p,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=On){const l=this.elements,u=2*s/(e-t),p=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let h,x;if(o===On)h=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===hs)h=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=On){const l=this.elements,u=1/(e-t),p=1/(n-r),d=1/(a-s),m=(e+t)*u,h=(n+r)*p;let x,g;if(o===On)x=(a+s)*d,g=-2*d;else if(o===hs)x=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new ct,pn=new Re,Rh=new ct(0,0,0),Ph=new ct(1,1,1),Yn=new ct,Or=new ct,rn=new ct,No=new Re,Fo=new Si;class zn{constructor(t=0,e=0,n=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],p=r[9],d=r[2],m=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dh=0;const Oo=new ct,Oi=new Si,Dn=new Re,kr=new ct,fr=new ct,Lh=new ct,Ih=new Si,ko=new ct(1,0,0),Bo=new ct(0,1,0),zo=new ct(0,0,1),Vo={type:"added"},Uh={type:"removed"},ki={type:"childadded",child:null},Bs={type:"childremoved",child:null};class $e extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new ct,e=new zn,n=new Si,r=new ct(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new re}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,e){return Oo.copy(t).applyQuaternion(this.quaternion),this.position.add(Oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(fr,kr,this.up):Dn.lookAt(kr,fr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,p=l.length;u<p;u++){const d=l[u];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),p=a(t.images),d=a(t.shapes),m=a(t.skeletons),h=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),h.length>0&&(n.animations=h),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const u in o){const p=o[u];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}$e.DEFAULT_UP=new ct(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new ct,Ln=new ct,zs=new ct,In=new ct,Bi=new ct,zi=new ct,Ho=new ct,Vs=new ct,Hs=new ct,Gs=new ct,Ws=new Ce,Xs=new Ce,$s=new Ce;class _n{constructor(t=new ct,e=new ct,n=new ct){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),Ln.subVectors(n,e),zs.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Ln),l=mn.dot(zs),u=Ln.dot(Ln),p=Ln.dot(zs),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const m=1/d,h=(u*l-o*p)*m,x=(a*p-o*l)*m;return s.set(1-h-x,x,h)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ws.setScalar(0),Xs.setScalar(0),$s.setScalar(0),Ws.fromBufferAttribute(t,e),Xs.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ws,s.x),a.addScaledVector(Xs,s.y),a.addScaledVector($s,s.z),a}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),Ln.subVectors(t,e),mn.cross(Ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Bi.subVectors(r,n),zi.subVectors(s,n),Vs.subVectors(t,n);const l=Bi.dot(Vs),u=zi.dot(Vs);if(l<=0&&u<=0)return e.copy(n);Hs.subVectors(t,r);const p=Bi.dot(Hs),d=zi.dot(Hs);if(p>=0&&d<=p)return e.copy(r);const m=l*d-p*u;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Bi,a);Gs.subVectors(t,s);const h=Bi.dot(Gs),x=zi.dot(Gs);if(x>=0&&h<=x)return e.copy(s);const g=h*u-l*x;if(g<=0&&u>=0&&x<=0)return o=u/(u-x),e.copy(n).addScaledVector(zi,o);const f=p*x-h*d;if(f<=0&&d-p>=0&&h-x>=0)return Ho.subVectors(s,r),o=(d-p)/(d-p+(h-x)),e.copy(r).addScaledVector(Ho,o);const c=1/(f+g+m);return a=g*c,o=m*c,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ve{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=_h(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=js(a,s,t+1/3),this.g=js(a,s,t),this.b=js(a,s,t-1/3)}return me.toWorkingColorSpace(this,r),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return me.fromWorkingColorSpace(Xe.copy(this),t),Math.round(le(Xe.r*255,0,255))*65536+Math.round(le(Xe.g*255,0,255))*256+Math.round(le(Xe.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,r=Xe.g,s=Xe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const p=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=p<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=p,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=on){me.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,r=Xe.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Br);const n=Ps(qn.h,Br.h,e),r=Ps(qn.s,Br.s,e),s=Ps(qn.l,Br.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new ve;ve.NAMES=Ql;let Nh=0;class Er extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Yi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tc extends Er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new ct,zr=new se;let Fh=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ro,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}}class ec extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xi extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oh=0;const an=new Re,Ys=new $e,Vi=new ct,sn=new Sr,pr=new Sr,Ve=new ct;class ii extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xi(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(sn.min,pr.min),sn.expandByPoint(Ve),Ve.addVectors(sn.max,pr.max),sn.expandByPoint(Ve)):(sn.expandByPoint(pr.min),sn.expandByPoint(pr.max))}sn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Ve.fromBufferAttribute(o,u),l&&(Vi.fromBufferAttribute(t,u),Ve.add(Vi)),r=Math.max(r,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new ct,l[O]=new ct;const u=new ct,p=new ct,d=new ct,m=new se,h=new se,x=new se,g=new ct,f=new ct;function c(O,T,A){u.fromBufferAttribute(n,O),p.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),m.fromBufferAttribute(s,O),h.fromBufferAttribute(s,T),x.fromBufferAttribute(s,A),p.sub(u),d.sub(u),h.sub(m),x.sub(m);const V=1/(h.x*x.y-x.x*h.y);isFinite(V)&&(g.copy(p).multiplyScalar(x.y).addScaledVector(d,-h.y).multiplyScalar(V),f.copy(d).multiplyScalar(h.x).addScaledVector(p,-x.x).multiplyScalar(V),o[O].add(g),o[T].add(g),o[A].add(g),l[O].add(f),l[T].add(f),l[A].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,T=E.length;O<T;++O){const A=E[O],V=A.start,R=A.count;for(let k=V,S=V+R;k<S;k+=3)c(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new ct,w=new ct,D=new ct,N=new ct;function I(O){D.fromBufferAttribute(r,O),N.copy(D);const T=o[O];M.copy(T),M.sub(D.multiplyScalar(D.dot(T))).normalize(),w.crossVectors(N,T);const V=w.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,V)}for(let O=0,T=E.length;O<T;++O){const A=E[O],V=A.start,R=A.count;for(let k=V,S=V+R;k<S;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,h=n.count;m<h;m++)n.setXYZ(m,0,0,0);const r=new ct,s=new ct,a=new ct,o=new ct,l=new ct,u=new ct,p=new ct,d=new ct;if(t)for(let m=0,h=t.count;m<h;m+=3){const x=t.getX(m+0),g=t.getX(m+1),f=t.getX(m+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,f),o.add(p),l.add(p),u.add(p),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let m=0,h=e.count;m<h;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const u=o.array,p=o.itemSize,d=o.normalized,m=new u.constructor(l.length*p);let h=0,x=0;for(let g=0,f=l.length;g<f;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*p;for(let c=0;c<p;c++)m[x++]=u[h++]}return new cn(m,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ii,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let p=0,d=u.length;p<d;p++){const m=u[p],h=t(m,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],p=[];for(let d=0,m=u.length;d<m;d++){const h=u[d];p.push(h.toJSON(t.data))}p.length>0&&(r[l]=p,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(e))}const s=t.morphAttributes;for(const u in s){const p=[],d=s[u];for(let m=0,h=d.length;m<h;m++)p.push(d[m].clone(e));this.morphAttributes[u]=p}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,p=a.length;u<p;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new Re,ci=new Kl,Vr=new oo,Wo=new ct,Hr=new ct,Gr=new ct,Wr=new ct,qs=new ct,Xr=new ct,Xo=new ct,$r=new ct;class Mn extends $e{constructor(t=new ii,e=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const p=o[l],d=s[l];p!==0&&(qs.fromBufferAttribute(d,t),a?Xr.addScaledVector(qs,p):Xr.addScaledVector(qs.sub(e),p))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Vr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Vr,Wo)===null||ci.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(Go.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,m=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=m.length;x<g;x++){const f=m[x],c=a[f.materialIndex],E=Math.max(f.start,h.start),M=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let w=E,D=M;w<D;w+=3){const N=o.getX(w),I=o.getX(w+1),O=o.getX(w+2);r=jr(this,c,t,n,u,p,d,N,I,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const x=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let f=x,c=g;f<c;f+=3){const E=o.getX(f),M=o.getX(f+1),w=o.getX(f+2);r=jr(this,a,t,n,u,p,d,E,M,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=m.length;x<g;x++){const f=m[x],c=a[f.materialIndex],E=Math.max(f.start,h.start),M=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let w=E,D=M;w<D;w+=3){const N=w,I=w+1,O=w+2;r=jr(this,c,t,n,u,p,d,N,I,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const x=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let f=x,c=g;f<c;f+=3){const E=f,M=f+1,w=f+2;r=jr(this,a,t,n,u,p,d,E,M,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function kh(i,t,e,n,r,s,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ei,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo($r);return u<e.near||u>e.far?null:{distance:u,point:$r.clone(),object:i}}function jr(i,t,e,n,r,s,a,o,l,u){i.getVertexPosition(o,Hr),i.getVertexPosition(l,Gr),i.getVertexPosition(u,Wr);const p=kh(i,t,e,n,Hr,Gr,Wr,Xo);if(p){const d=new ct;_n.getBarycoord(Xo,Hr,Gr,Wr,d),r&&(p.uv=_n.getInterpolatedAttribute(r,o,l,u,d,new se)),s&&(p.uv1=_n.getInterpolatedAttribute(s,o,l,u,d,new se)),a&&(p.normal=_n.getInterpolatedAttribute(a,o,l,u,d,new ct),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:o,b:l,c:u,normal:new ct,materialIndex:0};_n.getNormal(Hr,Gr,Wr,m.normal),p.face=m,p.barycoord=d}return p}class Mr extends ii{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],p=[],d=[];let m=0,h=0;x("z","y","x",-1,-1,n,e,t,a,s,0),x("z","y","x",1,-1,n,e,-t,a,s,1),x("x","z","y",1,1,t,n,e,r,a,2),x("x","z","y",1,-1,t,n,-e,r,a,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(p,3)),this.setAttribute("uv",new xi(d,2));function x(g,f,c,E,M,w,D,N,I,O,T){const A=w/I,V=D/O,R=w/2,k=D/2,S=N/2,H=I+1,at=O+1;let Z=0,nt=0;const st=new ct;for(let vt=0;vt<at;vt++){const X=vt*V-k;for(let Y=0;Y<H;Y++){const Lt=Y*A-R;st[g]=Lt*E,st[f]=X*M,st[c]=S,u.push(st.x,st.y,st.z),st[g]=0,st[f]=0,st[c]=N>0?1:-1,p.push(st.x,st.y,st.z),d.push(Y/I),d.push(1-vt/O),Z+=1}}for(let vt=0;vt<O;vt++)for(let X=0;X<I;X++){const Y=m+X+H*vt,Lt=m+X+H*(vt+1),q=m+(X+1)+H*(vt+1),it=m+(X+1)+H*vt;l.push(Y,Lt,it),l.push(Lt,q,it),nt+=6}o.addGroup(h,nt,T),h+=nt,m+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=ir(i[e]);for(const r in n)t[r]=n[r]}return t}function Bh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ic(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const zh={clone:ir,merge:qe};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Bh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rc extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new ct,$o=new se,jo=new se;class ln extends rc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,$o,jo),e.subVectors(jo,$o)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Gh extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const s=new ln(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const a=new ln(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new ln(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const l=new ln(Hi,Gi,t,e);l.layers=this.layers,this.add(l);const u=new ln(Hi,Gi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,p]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(d,m,h),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class sc extends Qe{constructor(t,e,n,r,s,a,o,l,u,p){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,r,s,a,o,l,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wh extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new sc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Qn});s.uniforms.tEquirect.value=e;const a=new Mn(r,s),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=En),new Gh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Yr extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xh={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const f=e.getJointPose(g,n),c=this._getHandJoint(u,g);f!==null&&(c.matrix.fromArray(f.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=f.radius),c.visible=f!==null}const p=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=p.position.distanceTo(d.position),h=.02,x=.005;u.inputState.pinching&&m>h+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&m<=h-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $h extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ks=new ct,jh=new ct,Yh=new re;class Kn{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ks.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ks),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yh.getNormalMatrix(t),r=this.coplanarPoint(Ks).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new oo,qr=new ct;class lo{constructor(t=new Kn,e=new Kn,n=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],p=r[5],d=r[6],m=r[7],h=r[8],x=r[9],g=r[10],f=r[11],c=r[12],E=r[13],M=r[14],w=r[15];if(n[0].setComponents(l-s,m-u,f-h,w-c).normalize(),n[1].setComponents(l+s,m+u,f+h,w+c).normalize(),n[2].setComponents(l+a,m+p,f+x,w+E).normalize(),n[3].setComponents(l-a,m-p,f-x,w-E).normalize(),n[4].setComponents(l-o,m-d,f-g,w-M).normalize(),e===On)n[5].setComponents(l+o,m+d,f+g,w+M).normalize();else if(e===hs)n[5].setComponents(o,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(qr.x=r.normal.x>0?t.max.x:t.min.x,qr.y=r.normal.y>0?t.max.y:t.min.y,qr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ac extends Qe{constructor(t,e,n,r,s,a,o,l,u,p=qi){if(p!==qi&&p!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===qi&&(n=yi),n===void 0&&p===er&&(n=tr),super(null,r,s,a,o,l,p,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ps extends ii{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),u=o+1,p=l+1,d=t/o,m=e/l,h=[],x=[],g=[],f=[];for(let c=0;c<p;c++){const E=c*m-a;for(let M=0;M<u;M++){const w=M*d-s;x.push(w,-E,0),g.push(0,0,1),f.push(M/o),f.push(1-c/l)}}for(let c=0;c<l;c++)for(let E=0;E<o;E++){const M=E+u*c,w=E+u*(c+1),D=E+1+u*(c+1),N=E+1+u*c;h.push(M,w,N),h.push(w,D,N)}this.setIndex(h),this.setAttribute("position",new xi(x,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.widthSegments,t.heightSegments)}}class qh extends Er{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Zh extends Er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kh extends Er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class oc extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Js=new Re,Yo=new ct,qo=new ct;class Jh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),Js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Js),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Js)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lc extends rc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qh extends Jh{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends oc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Qh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ed extends oc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class nd extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Zo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class id extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Ko(i,t,e,n){const r=rd(n);switch(e){case zl:return i*t;case Hl:return i*t;case Gl:return i*t*2;case Wl:return i*t/r.components*r.byteLength;case io:return i*t/r.components*r.byteLength;case Xl:return i*t*2/r.components*r.byteLength;case ro:return i*t*2/r.components*r.byteLength;case Vl:return i*t*3/r.components*r.byteLength;case gn:return i*t*4/r.components*r.byteLength;case so:return i*t*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case ba:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case as:case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $l:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rd(i){switch(i){case Bn:case Ol:return{byteLength:1,components:1};case _r:case kl:case yr:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case yi:case to:case Fn:return{byteLength:4,components:1};case Bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function sd(i){const t=new WeakMap;function e(o,l){const u=o.array,p=o.usage,d=u.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,u,p),o.onUploadCallback();let h;if(u instanceof Float32Array)h=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=i.SHORT;else if(u instanceof Uint32Array)h=i.UNSIGNED_INT;else if(u instanceof Int32Array)h=i.INT;else if(u instanceof Int8Array)h=i.BYTE;else if(u instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,u){const p=l.array,d=l.updateRanges;if(i.bindBuffer(u,o),d.length===0)i.bufferSubData(u,0,p);else{d.sort((h,x)=>h.start-x.start);let m=0;for(let h=1;h<d.length;h++){const x=d[m],g=d[h];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++m,d[m]=g)}d.length=m+1;for(let h=0,x=d.length;h<x;h++){const g=d[h];i.bufferSubData(u,g.start*p.BYTES_PER_ELEMENT,p,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:ud,alphatest_pars_fragment:hd,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:_d,beginnormal_vertex:gd,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:Md,color_fragment:wd,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Cd,common:Rd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Dd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Id,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:kd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:Vd,envmap_physical_pars_fragment:Jd,envmap_vertex:Hd,fog_vertex:Gd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:$d,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Yd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Kd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:rf,lights_physical_pars_fragment:sf,lights_fragment_begin:af,lights_fragment_maps:of,lights_fragment_end:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:_f,metalnessmap_fragment:gf,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:yf,morphnormal_vertex:bf,morphtarget_pars_vertex:Sf,morphtarget_vertex:Ef,normal_fragment_begin:Mf,normal_fragment_maps:wf,normal_pars_fragment:Tf,normal_pars_vertex:Af,normal_vertex:Cf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Df,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:If,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:kf,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:$f,skinning_pars_vertex:jf,skinning_vertex:Yf,skinnormal_vertex:qf,specularmap_fragment:Zf,specularmap_pars_fragment:Kf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:rp,worldpos_vertex:sp,background_vert:ap,background_frag:op,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:up,cube_frag:hp,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:_p,equirect_frag:gp,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:yp,meshbasic_frag:bp,meshlambert_vert:Sp,meshlambert_frag:Ep,meshmatcap_vert:Mp,meshmatcap_frag:wp,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Pp,meshphysical_frag:Dp,meshtoon_vert:Lp,meshtoon_frag:Ip,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:kp,sprite_frag:Bp},Ft={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},bn={basic:{uniforms:qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ve(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:qe([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:qe([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:qe([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ve(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:qe([Ft.points,Ft.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:qe([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:qe([Ft.common,Ft.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:qe([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:qe([Ft.sprite,Ft.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:qe([Ft.common,Ft.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:qe([Ft.lights,Ft.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};bn.physical={uniforms:qe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Zr={r:0,b:0,g:0},hi=new zn,zp=new Re;function Vp(i,t,e,n,r,s,a){const o=new ve(0);let l=s===!0?0:1,u,p,d=null,m=0,h=null;function x(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function g(M){let w=!1;const D=x(M);D===null?c(o,l):D&&D.isColor&&(c(D,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,w){const D=x(w);D&&(D.isCubeTexture||D.mapping===fs)?(p===void 0&&(p=new Mn(new Mr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ir(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),hi.copy(w.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(hi)),p.material.toneMapped=me.getTransfer(D.colorSpace)!==xe,(d!==D||m!==D.version||h!==i.toneMapping)&&(p.material.needsUpdate=!0,d=D,m=D.version,h=i.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Mn(new ps(2,2),new ni({name:"BackgroundMaterial",uniforms:ir(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=me.getTransfer(D.colorSpace)!==xe,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||m!==D.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,m=D.version,h=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function c(M,w){M.getRGB(Zr,ic(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,w,a)}function E(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),l=w,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,c(o,l)},render:g,addToRenderList:f,dispose:E}}function Hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,a=!1;function o(A,V,R,k,S){let H=!1;const at=d(k,R,V);s!==at&&(s=at,u(s.object)),H=h(A,k,R,S),H&&x(A,k,R,S),S!==null&&t.update(S,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,w(A,V,R,k),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(S).buffer))}function l(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function p(A){return i.deleteVertexArray(A)}function d(A,V,R){const k=R.wireframe===!0;let S=n[A.id];S===void 0&&(S={},n[A.id]=S);let H=S[V.id];H===void 0&&(H={},S[V.id]=H);let at=H[k];return at===void 0&&(at=m(l()),H[k]=at),at}function m(A){const V=[],R=[],k=[];for(let S=0;S<e;S++)V[S]=0,R[S]=0,k[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:R,attributeDivisors:k,object:A,attributes:{},index:null}}function h(A,V,R,k){const S=s.attributes,H=V.attributes;let at=0;const Z=R.getAttributes();for(const nt in Z)if(Z[nt].location>=0){const vt=S[nt];let X=H[nt];if(X===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(X=A.instanceColor)),vt===void 0||vt.attribute!==X||X&&vt.data!==X.data)return!0;at++}return s.attributesNum!==at||s.index!==k}function x(A,V,R,k){const S={},H=V.attributes;let at=0;const Z=R.getAttributes();for(const nt in Z)if(Z[nt].location>=0){let vt=H[nt];vt===void 0&&(nt==="instanceMatrix"&&A.instanceMatrix&&(vt=A.instanceMatrix),nt==="instanceColor"&&A.instanceColor&&(vt=A.instanceColor));const X={};X.attribute=vt,vt&&vt.data&&(X.data=vt.data),S[nt]=X,at++}s.attributes=S,s.attributesNum=at,s.index=k}function g(){const A=s.newAttributes;for(let V=0,R=A.length;V<R;V++)A[V]=0}function f(A){c(A,0)}function c(A,V){const R=s.newAttributes,k=s.enabledAttributes,S=s.attributeDivisors;R[A]=1,k[A]===0&&(i.enableVertexAttribArray(A),k[A]=1),S[A]!==V&&(i.vertexAttribDivisor(A,V),S[A]=V)}function E(){const A=s.newAttributes,V=s.enabledAttributes;for(let R=0,k=V.length;R<k;R++)V[R]!==A[R]&&(i.disableVertexAttribArray(R),V[R]=0)}function M(A,V,R,k,S,H,at){at===!0?i.vertexAttribIPointer(A,V,R,S,H):i.vertexAttribPointer(A,V,R,k,S,H)}function w(A,V,R,k){g();const S=k.attributes,H=R.getAttributes(),at=V.defaultAttributeValues;for(const Z in H){const nt=H[Z];if(nt.location>=0){let st=S[Z];if(st===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(st=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(st=A.instanceColor)),st!==void 0){const vt=st.normalized,X=st.itemSize,Y=t.get(st);if(Y===void 0)continue;const Lt=Y.buffer,q=Y.type,it=Y.bytesPerElement,Ct=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===to;if(st.isInterleavedBufferAttribute){const At=st.data,Rt=At.stride,Vt=st.offset;if(At.isInstancedInterleavedBuffer){for(let Ht=0;Ht<nt.locationSize;Ht++)c(nt.location+Ht,At.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Ht=0;Ht<nt.locationSize;Ht++)f(nt.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Ht=0;Ht<nt.locationSize;Ht++)M(nt.location+Ht,X/nt.locationSize,q,vt,Rt*it,(Vt+X/nt.locationSize*Ht)*it,Ct)}else{if(st.isInstancedBufferAttribute){for(let At=0;At<nt.locationSize;At++)c(nt.location+At,st.meshPerAttribute);A.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let At=0;At<nt.locationSize;At++)f(nt.location+At);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let At=0;At<nt.locationSize;At++)M(nt.location+At,X/nt.locationSize,q,vt,X*it,X/nt.locationSize*At*it,Ct)}}else if(at!==void 0){const vt=at[Z];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(nt.location,vt);break;case 3:i.vertexAttrib3fv(nt.location,vt);break;case 4:i.vertexAttrib4fv(nt.location,vt);break;default:i.vertexAttrib1fv(nt.location,vt)}}}}E()}function D(){O();for(const A in n){const V=n[A];for(const R in V){const k=V[R];for(const S in k)p(k[S].object),delete k[S];delete V[R]}delete n[A]}}function N(A){if(n[A.id]===void 0)return;const V=n[A.id];for(const R in V){const k=V[R];for(const S in k)p(k[S].object),delete k[S];delete V[R]}delete n[A.id]}function I(A){for(const V in n){const R=n[V];if(R[A.id]===void 0)continue;const k=R[A.id];for(const S in k)p(k[S].object),delete k[S];delete R[A.id]}}function O(){T(),a=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:f,disableUnusedAttributes:E}}function Gp(i,t,e){let n;function r(u){n=u}function s(u,p){i.drawArrays(n,u,p),e.update(p,n,1)}function a(u,p,d){d!==0&&(i.drawArraysInstanced(n,u,p,d),e.update(p,n,d))}function o(u,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,p,0,d);let h=0;for(let x=0;x<d;x++)h+=p[x];e.update(h,n,1)}function l(u,p,d,m){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let x=0;x<u.length;x++)a(u[x],p[x],m[x]);else{h.multiDrawArraysInstancedWEBGL(n,u,0,p,0,m,0,d);let x=0;for(let g=0;g<d;g++)x+=p[g]*m[g];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==gn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const O=I===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Bn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Fn&&!O)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=x>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:h,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:f,maxAttributes:c,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:D,maxSamples:N}}function Xp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Kn,o=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const h=d.length!==0||m||n!==0||r;return r=m,n=d.length,h},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=p(d,m,0)},this.setState=function(d,m,h){const x=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,c=i.get(d);if(!r||x===null||x.length===0||s&&!f)s?p(null):u();else{const E=s?0:n,M=E*4;let w=c.clippingState||null;l.value=w,w=p(x,m,M,h);for(let D=0;D!==M;++D)w[D]=e[D];c.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(d,m,h,x){const g=d!==null?d.length:0;let f=null;if(g!==0){if(f=l.value,x!==!0||f===null){const c=h+g*4,E=m.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<c)&&(f=new Float32Array(c));for(let M=0,w=h;M!==g;++M,w+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(f,w),f[w+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function $p(i){let t=new WeakMap;function e(a,o){return o===ga?a.mapping=Ji:o===va&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ga||o===va)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Wh(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const $i=4,Jo=[.125,.215,.35,.446,.526,.582],_i=20,Qs=new lc,Qo=new ve;let ta=null,ea=0,na=0,ia=!1;const pi=(1+Math.sqrt(5))/2,Wi=1/pi,tl=[new ct(-pi,Wi,0),new ct(pi,Wi,0),new ct(-Wi,0,pi),new ct(Wi,0,pi),new ct(0,pi,-Wi),new ct(0,pi,Wi),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],jp=new ct;class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=jp}=s;ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:yr,format:gn,colorSpace:nr,depthBuffer:!1},r=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(s)),this._blurMaterial=qp(s,t,e)}return r}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,Qs)}_sceneToCubeUV(t,e,n,r,s){const l=new ln(90,1,e,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,h=d.toneMapping;d.getClearColor(Qo),d.toneMapping=ti,d.autoClear=!1;const x=new tc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new Mn(new Mr,x);let f=!1;const c=t.background;c?c.isColor&&(x.color.copy(c),t.background=null,f=!0):(x.color.copy(Qo),f=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,u[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[E],s.y,s.z)):M===1?(l.up.set(0,0,u[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[E],s.z)):(l.up.set(0,u[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[E]));const w=this._cubeSize;Kr(r,M*w,E>2?w:0,w,w),d.setRenderTarget(r),f&&d.render(g,l),d.render(t,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=m,t.background=c}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ji||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tl[(r-s-1)%tl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Mn(this._lodPlanes[r],u),m=u.uniforms,h=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_i-1),g=s/x,f=isFinite(s)?1+Math.floor(p*g):_i;f>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${_i}`);const c=[];let E=0;for(let I=0;I<_i;++I){const O=I/g,T=Math.exp(-O*O/2);c.push(T),I===0?E+=T:I<f&&(E+=2*T)}for(let I=0;I<c.length;I++)c[I]=c[I]/E;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=c,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:M}=this;m.dTheta.value=x,m.mipInt.value=M-n;const w=this._sizeLods[r],D=3*w*(r>M-$i?r-M+$i:0),N=4*(this._cubeSize-w);Kr(e,D,N,3*w,2*w),l.setRenderTarget(e),l.render(d,Qs)}}function Yp(i){const t=[],e=[],n=[];let r=i;const s=i-$i+1+Jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-$i?l=Jo[a-i+$i-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),p=-u,d=1+u,m=[p,p,d,p,d,d,p,p,d,d,p,d],h=6,x=6,g=3,f=2,c=1,E=new Float32Array(g*x*h),M=new Float32Array(f*x*h),w=new Float32Array(c*x*h);for(let N=0;N<h;N++){const I=N%3*2/3-1,O=N>2?0:-1,T=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];E.set(T,g*x*N),M.set(m,f*x*N);const A=[N,N,N,N,N,N];w.set(A,c*x*N)}const D=new ii;D.setAttribute("position",new cn(E,g)),D.setAttribute("uv",new cn(M,f)),D.setAttribute("faceIndex",new cn(w,c)),t.push(D),r>$i&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function qp(i,t,e){const n=new Float32Array(_i),r=new ct(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function il(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function rl(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===ga||l===va,p=l===Ji||l===Qi;if(u||p){let d=t.get(o);const m=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new el(i)),d=u?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return u&&h&&h.height>0||p&&h&&r(h)?(e===null&&(e=new el(i)),d=u?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let p=0;p<u;p++)o[p]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Kp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jp(i,t,e,n){const r={},s=new WeakMap;function a(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const x in m.attributes)t.remove(m.attributes[x]);m.removeEventListener("dispose",a),delete r[m.id];const h=s.get(m);h&&(t.remove(h),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(d,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const h in m)t.update(m[h],i.ARRAY_BUFFER)}function u(d){const m=[],h=d.index,x=d.attributes.position;let g=0;if(h!==null){const E=h.array;g=h.version;for(let M=0,w=E.length;M<w;M+=3){const D=E[M+0],N=E[M+1],I=E[M+2];m.push(D,N,N,I,I,D)}}else if(x!==void 0){const E=x.array;g=x.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const D=M+0,N=M+1,I=M+2;m.push(D,N,N,I,I,D)}}else return;const f=new(ql(m)?nc:ec)(m,1);f.version=g;const c=s.get(d);c&&t.remove(c),s.set(d,f)}function p(d){const m=s.get(d);if(m){const h=d.index;h!==null&&m.version<h.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:p}}function Qp(i,t,e){let n;function r(m){n=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,h){i.drawElements(n,h,s,m*a),e.update(h,n,1)}function u(m,h,x){x!==0&&(i.drawElementsInstanced(n,h,s,m*a,x),e.update(h,n,x))}function p(m,h,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,m,0,x);let f=0;for(let c=0;c<x;c++)f+=h[c];e.update(f,n,1)}function d(m,h,x,g){if(x===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let c=0;c<m.length;c++)u(m[c]/a,h[c],g[c]);else{f.multiDrawElementsInstancedWEBGL(n,h,0,s,m,0,g,0,x);let c=0;for(let E=0;E<x;E++)c+=h[E]*g[E];e.update(c,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function tm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function em(i,t,e){const n=new WeakMap,r=new Ce;function s(a,o,l){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=p!==void 0?p.length:0;let m=n.get(o);if(m===void 0||m.count!==d){let T=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",T)};m!==void 0&&m.texture.dispose();const h=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;h===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,D=1;w>t.maxTextureSize&&(D=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const N=new Float32Array(w*D*4*d),I=new Zl(N,w,D,d);I.type=Fn,I.needsUpdate=!0;const O=M*4;for(let A=0;A<d;A++){const V=f[A],R=c[A],k=E[A],S=w*D*4*A;for(let H=0;H<V.count;H++){const at=H*O;h===!0&&(r.fromBufferAttribute(V,H),N[S+at+0]=r.x,N[S+at+1]=r.y,N[S+at+2]=r.z,N[S+at+3]=0),x===!0&&(r.fromBufferAttribute(R,H),N[S+at+4]=r.x,N[S+at+5]=r.y,N[S+at+6]=r.z,N[S+at+7]=0),g===!0&&(r.fromBufferAttribute(k,H),N[S+at+8]=r.x,N[S+at+9]=r.y,N[S+at+10]=r.z,N[S+at+11]=k.itemSize===4?r.w:1)}}m={count:d,texture:I,size:new se(w,D)},n.set(o,m),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let g=0;g<u.length;g++)h+=u[g];const x=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function nm(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,p=l.geometry,d=t.get(l,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const uc=new Qe,sl=new ac(1,1),hc=new Zl,dc=new Ah,fc=new sc,al=[],ol=[],ll=new Float32Array(16),cl=new Float32Array(9),ul=new Float32Array(4);function sr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=al[r];if(s===void 0&&(s=new Float32Array(r),al[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ms(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),Fe(e,n)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Fe(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Fe(e,n)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function vm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=Yl,s=sl):s=uc,e.setTexture2D(t||s,r)}function xm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||dc,r)}function ym(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||fc,r)}function bm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||hc,r)}function Sm(i){switch(i){case 5126:return im;case 35664:return rm;case 35665:return sm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return _m;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}function Em(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){const e=sr(t,this.size,2);i.uniform2fv(this.addr,e)}function wm(i,t){const e=sr(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){const e=sr(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){const e=sr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cm(i,t){const e=sr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rm(i,t){const e=sr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Lm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function km(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||uc,s[a])}function Bm(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||dc,s[a])}function zm(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||fc,s[a])}function Vm(i,t,e){const n=this.cache,r=t.length,s=ms(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||hc,s[a])}function Hm(i){switch(i){case 5126:return Em;case 35664:return Mm;case 35665:return wm;case 35666:return Tm;case 35674:return Am;case 35675:return Cm;case 35676:return Rm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function hl(i,t){i.seq.push(t),i.map[t.id]=t}function $m(i,t,e){const n=i.name,r=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){hl(e,u===void 0?new Gm(o,i,t):new Wm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Xm(o),hl(e,d)),e=d}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);$m(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jm=37297;let Ym=0;function qm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fl=new re;function Zm(i){me._getMatrix(fl,me.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case us:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),a)}else return r}function Km(i,t){const e=Zm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(i,t){let e;switch(t){case Ju:e="Linear";break;case Qu:e="Reinhard";break;case th:e="Cineon";break;case eh:e="ACESFilmic";break;case ih:e="AgX";break;case rh:e="Neutral";break;case nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jr=new ct;function Qm(){me.getLuminanceCoefficients(Jr);const i=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function e_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function mr(i){return i!==""}function ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _l(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(i_,s_)}const r_=new Map;function s_(i,t){let e=ae[t];if(e===void 0){const n=r_.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(a_,o_)}function o_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ul?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case fs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:t="ENVMAP_MODE_REFRACTION";break}return t}function h_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nl:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function d_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=l_(e),u=c_(e),p=u_(e),d=h_(e),m=d_(e),h=t_(e),x=e_(s),g=r.createProgram();let f,c,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(mr).join(`
`),f.length>0&&(f+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(mr).join(`
`),c.length>0&&(c+=`
`)):(f=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),c=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?ae.tonemapping_pars_fragment:"",e.toneMapping!==ti?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),Qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=Ya(a),a=ml(a,e),a=_l(a,e),o=Ya(o),o=ml(o,e),o=_l(o,e),a=gl(a),o=gl(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,c=["#define varying in",e.glslVersion===Po?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const M=E+f+a,w=E+c+o,D=dl(r,r.VERTEX_SHADER,M),N=dl(r,r.FRAGMENT_SHADER,w);r.attachShader(g,D),r.attachShader(g,N),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function I(V){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(g).trim(),k=r.getShaderInfoLog(D).trim(),S=r.getShaderInfoLog(N).trim();let H=!0,at=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,D,N);else{const Z=pl(r,D,"vertex"),nt=pl(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+R+`
`+Z+`
`+nt)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(k===""||S==="")&&(at=!1);at&&(V.diagnostics={runnable:H,programLog:R,vertexShader:{log:k,prefix:f},fragmentShader:{log:S,prefix:c}})}r.deleteShader(D),r.deleteShader(N),O=new ls(r,g),T=n_(r,g)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(g,jm)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=N,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new __(t),e.set(t,n)),n}}class __{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function g_(i,t,e,n,r,s,a){const o=new Jl,l=new m_,u=new Set,p=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let h=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return u.add(T),T===0?"uv":`uv${T}`}function f(T,A,V,R,k){const S=R.fog,H=k.geometry,at=T.isMeshStandardMaterial?R.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||at),nt=Z&&Z.mapping===fs?Z.image.height:null,st=x[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,X=vt!==void 0?vt.length:0;let Y=0;H.morphAttributes.position!==void 0&&(Y=1),H.morphAttributes.normal!==void 0&&(Y=2),H.morphAttributes.color!==void 0&&(Y=3);let Lt,q,it,Ct;if(st){const _e=bn[st];Lt=_e.vertexShader,q=_e.fragmentShader}else Lt=T.vertexShader,q=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),Ct=l.getFragmentShaderID(T);const At=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Vt=k.isInstancedMesh===!0,Ht=k.isBatchedMesh===!0,Qt=!!T.map,oe=!!T.matcap,Zt=!!Z,_=!!T.aoMap,pt=!!T.lightMap,tt=!!T.bumpMap,F=!!T.normalMap,L=!!T.displacementMap,W=!!T.emissiveMap,ot=!!T.metalnessMap,C=!!T.roughnessMap,b=T.anisotropy>0,z=T.clearcoat>0,J=T.dispersion>0,j=T.iridescence>0,et=T.sheen>0,Pt=T.transmission>0,xt=b&&!!T.anisotropyMap,Dt=z&&!!T.clearcoatMap,te=z&&!!T.clearcoatNormalMap,St=z&&!!T.clearcoatRoughnessMap,It=j&&!!T.iridescenceMap,Ot=j&&!!T.iridescenceThicknessMap,$t=et&&!!T.sheenColorMap,Bt=et&&!!T.sheenRoughnessMap,Yt=!!T.specularMap,ee=!!T.specularColorMap,ge=!!T.specularIntensityMap,$=Pt&&!!T.transmissionMap,Ut=Pt&&!!T.thicknessMap,dt=!!T.gradientMap,_t=!!T.alphaMap,bt=T.alphaTest>0,zt=!!T.alphaHash,qt=!!T.extensions;let de=ti;T.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(de=i.toneMapping);const Oe={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:Lt,fragmentShader:q,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Ct,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:Ht,batchingColor:Ht&&k._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,instancingMorph:Vt&&k.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:nr,alphaToCoverage:!!T.alphaToCoverage,map:Qt,matcap:oe,envMap:Zt,envMapMode:Zt&&Z.mapping,envMapCubeUVHeight:nt,aoMap:_,lightMap:pt,bumpMap:tt,normalMap:F,displacementMap:m&&L,emissiveMap:W,normalMapObjectSpace:F&&T.normalMapType===lh,normalMapTangentSpace:F&&T.normalMapType===jl,metalnessMap:ot,roughnessMap:C,anisotropy:b,anisotropyMap:xt,clearcoat:z,clearcoatMap:Dt,clearcoatNormalMap:te,clearcoatRoughnessMap:St,dispersion:J,iridescence:j,iridescenceMap:It,iridescenceThicknessMap:Ot,sheen:et,sheenColorMap:$t,sheenRoughnessMap:Bt,specularMap:Yt,specularColorMap:ee,specularIntensityMap:ge,transmission:Pt,transmissionMap:$,thicknessMap:Ut,gradientMap:dt,opaque:T.transparent===!1&&T.blending===Yi&&T.alphaToCoverage===!1,alphaMap:_t,alphaTest:bt,alphaHash:zt,combine:T.combine,mapUv:Qt&&g(T.map.channel),aoMapUv:_&&g(T.aoMap.channel),lightMapUv:pt&&g(T.lightMap.channel),bumpMapUv:tt&&g(T.bumpMap.channel),normalMapUv:F&&g(T.normalMap.channel),displacementMapUv:L&&g(T.displacementMap.channel),emissiveMapUv:W&&g(T.emissiveMap.channel),metalnessMapUv:ot&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:xt&&g(T.anisotropyMap.channel),clearcoatMapUv:Dt&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(T.sheenRoughnessMap.channel),specularMapUv:Yt&&g(T.specularMap.channel),specularColorMapUv:ee&&g(T.specularColorMap.channel),specularIntensityMapUv:ge&&g(T.specularIntensityMap.channel),transmissionMapUv:$&&g(T.transmissionMap.channel),thicknessMapUv:Ut&&g(T.thicknessMap.channel),alphaMapUv:_t&&g(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(F||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Qt||_t),fog:!!S,useFog:T.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Qt&&T.map.isVideoTexture===!0&&me.getTransfer(T.map.colorSpace)===xe,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&me.getTransfer(T.emissiveMap.colorSpace)===xe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Nn,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&T.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=u.has(1),Oe.vertexUv2s=u.has(2),Oe.vertexUv3s=u.has(3),u.clear(),Oe}function c(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)A.push(V),A.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(E(A,T),M(A,T),A.push(i.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function E(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function M(T,A){o.disableAll(),A.supportsVertexTextures&&o.enable(0),A.instancing&&o.enable(1),A.instancingColor&&o.enable(2),A.instancingMorph&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),A.dispersion&&o.enable(20),A.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reverseDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),T.push(o.mask)}function w(T){const A=x[T.type];let V;if(A){const R=bn[A];V=zh.clone(R.uniforms)}else V=T.uniforms;return V}function D(T,A){let V;for(let R=0,k=p.length;R<k;R++){const S=p[R];if(S.cacheKey===A){V=S,++V.usedTimes;break}}return V===void 0&&(V=new f_(i,A,T,s),p.push(V)),V}function N(T){if(--T.usedTimes===0){const A=p.indexOf(T);p[A]=p[p.length-1],p.pop(),T.destroy()}}function I(T){l.remove(T)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:c,getUniforms:w,acquireProgram:D,releaseProgram:N,releaseShaderCache:I,programs:p,dispose:O}}function v_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function x_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,m,h,x,g,f){let c=i[t];return c===void 0?(c={id:d.id,object:d,geometry:m,material:h,groupOrder:x,renderOrder:d.renderOrder,z:g,group:f},i[t]=c):(c.id=d.id,c.object=d,c.geometry=m,c.material=h,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=g,c.group=f),t++,c}function o(d,m,h,x,g,f){const c=a(d,m,h,x,g,f);h.transmission>0?n.push(c):h.transparent===!0?r.push(c):e.push(c)}function l(d,m,h,x,g,f){const c=a(d,m,h,x,g,f);h.transmission>0?n.unshift(c):h.transparent===!0?r.unshift(c):e.unshift(c)}function u(d,m){e.length>1&&e.sort(d||x_),n.length>1&&n.sort(m||xl),r.length>1&&r.sort(m||xl)}function p(){for(let d=t,m=i.length;d<m;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:p,sort:u}}function y_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new yl,i.set(n,[a])):r>=s.length?(a=new yl,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ct,color:new ve};break;case"SpotLight":e={position:new ct,direction:new ct,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return i[t.id]=e,e}}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let E_=0;function M_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){const t=new b_,e=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new ct);const r=new ct,s=new Re,a=new Re;function o(u){let p=0,d=0,m=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let h=0,x=0,g=0,f=0,c=0,E=0,M=0,w=0,D=0,N=0,I=0;u.sort(M_);for(let T=0,A=u.length;T<A;T++){const V=u[T],R=V.color,k=V.intensity,S=V.distance,H=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=R.r*k,d+=R.g*k,m+=R.b*k;else if(V.isLightProbe){for(let at=0;at<9;at++)n.probe[at].addScaledVector(V.sh.coefficients[at],k);I++}else if(V.isDirectionalLight){const at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,nt=e.get(V);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.directionalShadow[h]=nt,n.directionalShadowMap[h]=H,n.directionalShadowMatrix[h]=V.shadow.matrix,E++}n.directional[h]=at,h++}else if(V.isSpotLight){const at=t.get(V);at.position.setFromMatrixPosition(V.matrixWorld),at.color.copy(R).multiplyScalar(k),at.distance=S,at.coneCos=Math.cos(V.angle),at.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),at.decay=V.decay,n.spot[g]=at;const Z=V.shadow;if(V.map&&(n.spotLightMap[D]=V.map,D++,Z.updateMatrices(V),V.castShadow&&N++),n.spotLightMatrix[g]=Z.matrix,V.castShadow){const nt=e.get(V);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,n.spotShadow[g]=nt,n.spotShadowMap[g]=H,w++}g++}else if(V.isRectAreaLight){const at=t.get(V);at.color.copy(R).multiplyScalar(k),at.halfWidth.set(V.width*.5,0,0),at.halfHeight.set(0,V.height*.5,0),n.rectArea[f]=at,f++}else if(V.isPointLight){const at=t.get(V);if(at.color.copy(V.color).multiplyScalar(V.intensity),at.distance=V.distance,at.decay=V.decay,V.castShadow){const Z=V.shadow,nt=e.get(V);nt.shadowIntensity=Z.intensity,nt.shadowBias=Z.bias,nt.shadowNormalBias=Z.normalBias,nt.shadowRadius=Z.radius,nt.shadowMapSize=Z.mapSize,nt.shadowCameraNear=Z.camera.near,nt.shadowCameraFar=Z.camera.far,n.pointShadow[x]=nt,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=V.shadow.matrix,M++}n.point[x]=at,x++}else if(V.isHemisphereLight){const at=t.get(V);at.skyColor.copy(V.color).multiplyScalar(k),at.groundColor.copy(V.groundColor).multiplyScalar(k),n.hemi[c]=at,c++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==h||O.pointLength!==x||O.spotLength!==g||O.rectAreaLength!==f||O.hemiLength!==c||O.numDirectionalShadows!==E||O.numPointShadows!==M||O.numSpotShadows!==w||O.numSpotMaps!==D||O.numLightProbes!==I)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=f,n.point.length=x,n.hemi.length=c,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+D-N,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,O.directionalLength=h,O.pointLength=x,O.spotLength=g,O.rectAreaLength=f,O.hemiLength=c,O.numDirectionalShadows=E,O.numPointShadows=M,O.numSpotShadows=w,O.numSpotMaps=D,O.numLightProbes=I,n.version=E_++)}function l(u,p){let d=0,m=0,h=0,x=0,g=0;const f=p.matrixWorldInverse;for(let c=0,E=u.length;c<E;c++){const M=u[c];if(M.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(M.isSpotLight){const w=n.spot[h];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),h++}else if(M.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(M.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const w=n.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:n}}function bl(i){const t=new w_(i),e=[],n=[];function r(p){u.camera=p,e.length=0,n.length=0}function s(p){e.push(p)}function a(p){n.push(p)}function o(){t.setup(e)}function l(p){t.setupView(e,p)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function T_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new bl(i),t.set(r,[o])):s>=a.length?(o=new bl(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(i,t,e){let n=new lo;const r=new se,s=new se,a=new Ce,o=new Zh({depthPacking:oh}),l=new Kh,u={},p=e.maxTextureSize,d={[ei]:Je,[Je]:ei,[Nn]:Nn},m=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),h=m.clone();h.defines.HORIZONTAL_PASS=1;const x=new ii;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mn(x,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let c=this.type;this.render=function(N,I,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||N.length===0)return;const T=i.getRenderTarget(),A=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Qn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const k=c!==Un&&this.type===Un,S=c===Un&&this.type!==Un;for(let H=0,at=N.length;H<at;H++){const Z=N[H],nt=Z.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);const st=nt.getFrameExtents();if(r.multiply(st),s.copy(nt.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/st.x),r.x=s.x*st.x,nt.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/st.y),r.y=s.y*st.y,nt.mapSize.y=s.y)),nt.map===null||k===!0||S===!0){const X=this.type!==Un?{minFilter:vn,magFilter:vn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new bi(r.x,r.y,X),nt.map.texture.name=Z.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const vt=nt.getViewportCount();for(let X=0;X<vt;X++){const Y=nt.getViewport(X);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),R.viewport(a),nt.updateMatrices(Z,X),n=nt.getFrustum(),w(I,O,nt.camera,Z,this.type)}nt.isPointLightShadow!==!0&&this.type===Un&&E(nt,O),nt.needsUpdate=!1}c=this.type,f.needsUpdate=!1,i.setRenderTarget(T,A,V)};function E(N,I){const O=t.update(g);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,h.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new bi(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(I,null,O,m,g,null),h.uniforms.shadow_pass.value=N.mapPass.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(I,null,O,h,g,null)}function M(N,I,O,T){let A=null;const V=O.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)A=V;else if(A=O.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const R=A.uuid,k=I.uuid;let S=u[R];S===void 0&&(S={},u[R]=S);let H=S[k];H===void 0&&(H=A.clone(),S[k]=H,I.addEventListener("dispose",D)),A=H}if(A.visible=I.visible,A.wireframe=I.wireframe,T===Un?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:d[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const R=i.properties.get(A);R.light=O}return A}function w(N,I,O,T,A){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===Un)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,N.matrixWorld);const k=t.update(N),S=N.material;if(Array.isArray(S)){const H=k.groups;for(let at=0,Z=H.length;at<Z;at++){const nt=H[at],st=S[nt.materialIndex];if(st&&st.visible){const vt=M(N,st,T,A);N.onBeforeShadow(i,N,I,O,k,vt,nt),i.renderBufferDirect(O,null,k,vt,N,nt),N.onAfterShadow(i,N,I,O,k,vt,nt)}}}else if(S.visible){const H=M(N,S,T,A);N.onBeforeShadow(i,N,I,O,k,H,null),i.renderBufferDirect(O,null,k,H,N,null),N.onAfterShadow(i,N,I,O,k,H,null)}}const R=N.children;for(let k=0,S=R.length;k<S;k++)w(R[k],I,O,T,A)}function D(N){N.target.removeEventListener("dispose",D);for(const O in u){const T=u[O],A=N.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}const P_={[ua]:ha,[da]:ma,[fa]:_a,[Ki]:pa,[ha]:ua,[ma]:da,[_a]:fa,[pa]:Ki};function D_(i,t){function e(){let $=!1;const Ut=new Ce;let dt=null;const _t=new Ce(0,0,0,0);return{setMask:function(bt){dt!==bt&&!$&&(i.colorMask(bt,bt,bt,bt),dt=bt)},setLocked:function(bt){$=bt},setClear:function(bt,zt,qt,de,Oe){Oe===!0&&(bt*=de,zt*=de,qt*=de),Ut.set(bt,zt,qt,de),_t.equals(Ut)===!1&&(i.clearColor(bt,zt,qt,de),_t.copy(Ut))},reset:function(){$=!1,dt=null,_t.set(-1,0,0,0)}}}function n(){let $=!1,Ut=!1,dt=null,_t=null,bt=null;return{setReversed:function(zt){if(Ut!==zt){const qt=t.get("EXT_clip_control");Ut?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const de=bt;bt=null,this.setClear(de)}Ut=zt},getReversed:function(){return Ut},setTest:function(zt){zt?At(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(zt){dt!==zt&&!$&&(i.depthMask(zt),dt=zt)},setFunc:function(zt){if(Ut&&(zt=P_[zt]),_t!==zt){switch(zt){case ua:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=zt}},setLocked:function(zt){$=zt},setClear:function(zt){bt!==zt&&(Ut&&(zt=1-zt),i.clearDepth(zt),bt=zt)},reset:function(){$=!1,dt=null,_t=null,bt=null,Ut=!1}}}function r(){let $=!1,Ut=null,dt=null,_t=null,bt=null,zt=null,qt=null,de=null,Oe=null;return{setTest:function(_e){$||(_e?At(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(_e){Ut!==_e&&!$&&(i.stencilMask(_e),Ut=_e)},setFunc:function(_e,je,tn){(dt!==_e||_t!==je||bt!==tn)&&(i.stencilFunc(_e,je,tn),dt=_e,_t=je,bt=tn)},setOp:function(_e,je,tn){(zt!==_e||qt!==je||de!==tn)&&(i.stencilOp(_e,je,tn),zt=_e,qt=je,de=tn)},setLocked:function(_e){$=_e},setClear:function(_e){Oe!==_e&&(i.clearStencil(_e),Oe=_e)},reset:function(){$=!1,Ut=null,dt=null,_t=null,bt=null,zt=null,qt=null,de=null,Oe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,u=new WeakMap;let p={},d={},m=new WeakMap,h=[],x=null,g=!1,f=null,c=null,E=null,M=null,w=null,D=null,N=null,I=new ve(0,0,0),O=0,T=!1,A=null,V=null,R=null,k=null,S=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,Z=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),at=Z>=1):nt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),at=Z>=2);let st=null,vt={};const X=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),Lt=new Ce().fromArray(X),q=new Ce().fromArray(Y);function it($,Ut,dt,_t){const bt=new Uint8Array(4),zt=i.createTexture();i.bindTexture($,zt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<dt;qt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Ut+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return zt}const Ct={};Ct[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),At(i.DEPTH_TEST),a.setFunc(Ki),tt(!1),F(Mo),At(i.CULL_FACE),_(Qn);function At($){p[$]!==!0&&(i.enable($),p[$]=!0)}function Rt($){p[$]!==!1&&(i.disable($),p[$]=!1)}function Vt($,Ut){return d[$]!==Ut?(i.bindFramebuffer($,Ut),d[$]=Ut,$===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ut),$===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht($,Ut){let dt=h,_t=!1;if($){dt=m.get(Ut),dt===void 0&&(dt=[],m.set(Ut,dt));const bt=$.textures;if(dt.length!==bt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,qt=bt.length;zt<qt;zt++)dt[zt]=i.COLOR_ATTACHMENT0+zt;dt.length=bt.length,_t=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(dt)}function Qt($){return x!==$?(i.useProgram($),x=$,!0):!1}const oe={[mi]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};oe[Nu]=i.MIN,oe[Fu]=i.MAX;const Zt={[Ou]:i.ZERO,[ku]:i.ONE,[Bu]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function _($,Ut,dt,_t,bt,zt,qt,de,Oe,_e){if($===Qn){g===!0&&(Rt(i.BLEND),g=!1);return}if(g===!1&&(At(i.BLEND),g=!0),$!==Lu){if($!==f||_e!==T){if((c!==mi||w!==mi)&&(i.blendEquation(i.FUNC_ADD),c=mi,w=mi),_e)switch($){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.ONE,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case To:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}E=null,M=null,D=null,N=null,I.set(0,0,0),O=0,f=$,T=_e}return}bt=bt||Ut,zt=zt||dt,qt=qt||_t,(Ut!==c||bt!==w)&&(i.blendEquationSeparate(oe[Ut],oe[bt]),c=Ut,w=bt),(dt!==E||_t!==M||zt!==D||qt!==N)&&(i.blendFuncSeparate(Zt[dt],Zt[_t],Zt[zt],Zt[qt]),E=dt,M=_t,D=zt,N=qt),(de.equals(I)===!1||Oe!==O)&&(i.blendColor(de.r,de.g,de.b,Oe),I.copy(de),O=Oe),f=$,T=!1}function pt($,Ut){$.side===Nn?Rt(i.CULL_FACE):At(i.CULL_FACE);let dt=$.side===Je;Ut&&(dt=!dt),tt(dt),$.blending===Yi&&$.transparent===!1?_(Qn):_($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),s.setMask($.colorWrite);const _t=$.stencilWrite;o.setTest(_t),_t&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),W($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt($){A!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),A=$)}function F($){$!==Ru?(At(i.CULL_FACE),$!==V&&($===Mo?i.cullFace(i.BACK):$===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),V=$}function L($){$!==R&&(at&&i.lineWidth($),R=$)}function W($,Ut,dt){$?(At(i.POLYGON_OFFSET_FILL),(k!==Ut||S!==dt)&&(i.polygonOffset(Ut,dt),k=Ut,S=dt)):Rt(i.POLYGON_OFFSET_FILL)}function ot($){$?At(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function C($){$===void 0&&($=i.TEXTURE0+H-1),st!==$&&(i.activeTexture($),st=$)}function b($,Ut,dt){dt===void 0&&(st===null?dt=i.TEXTURE0+H-1:dt=st);let _t=vt[dt];_t===void 0&&(_t={type:void 0,texture:void 0},vt[dt]=_t),(_t.type!==$||_t.texture!==Ut)&&(st!==dt&&(i.activeTexture(dt),st=dt),i.bindTexture($,Ut||Ct[$]),_t.type=$,_t.texture=Ut)}function z(){const $=vt[st];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function j(){try{i.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{i.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pt(){try{i.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{i.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function te(){try{i.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{i.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function It(){try{i.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ot(){try{i.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function $t($){Lt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Lt.copy($))}function Bt($){q.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),q.copy($))}function Yt($,Ut){let dt=u.get(Ut);dt===void 0&&(dt=new WeakMap,u.set(Ut,dt));let _t=dt.get($);_t===void 0&&(_t=i.getUniformBlockIndex(Ut,$.name),dt.set($,_t))}function ee($,Ut){const _t=u.get(Ut).get($);l.get(Ut)!==_t&&(i.uniformBlockBinding(Ut,_t,$.__bindingPointIndex),l.set(Ut,_t))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},st=null,vt={},d={},m=new WeakMap,h=[],x=null,g=!1,f=null,c=null,E=null,M=null,w=null,D=null,N=null,I=new ve(0,0,0),O=0,T=!1,A=null,V=null,R=null,k=null,S=null,Lt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:At,disable:Rt,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:Qt,setBlending:_,setMaterial:pt,setFlipSided:tt,setCullFace:F,setLineWidth:L,setPolygonOffset:W,setScissorTest:ot,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:It,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:ee,texStorage2D:te,texStorage3D:St,texSubImage2D:et,texSubImage3D:Pt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Dt,scissor:$t,viewport:Bt,reset:ge}}function L_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new se,p=new WeakMap;let d;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return h?new OffscreenCanvas(C,b):ds("canvas")}function g(C,b,z){let J=1;const j=ot(C);if((j.width>z||j.height>z)&&(J=z/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(J*j.width),Pt=Math.floor(J*j.height);d===void 0&&(d=x(et,Pt));const xt=b?x(et,Pt):d;return xt.width=et,xt.height=Pt,xt.getContext("2d").drawImage(C,0,0,et,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+et+"x"+Pt+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function f(C){return C.generateMipmaps}function c(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,b,z,J,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=b;if(b===i.RED&&(z===i.FLOAT&&(et=i.R32F),z===i.HALF_FLOAT&&(et=i.R16F),z===i.UNSIGNED_BYTE&&(et=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.R8UI),z===i.UNSIGNED_SHORT&&(et=i.R16UI),z===i.UNSIGNED_INT&&(et=i.R32UI),z===i.BYTE&&(et=i.R8I),z===i.SHORT&&(et=i.R16I),z===i.INT&&(et=i.R32I)),b===i.RG&&(z===i.FLOAT&&(et=i.RG32F),z===i.HALF_FLOAT&&(et=i.RG16F),z===i.UNSIGNED_BYTE&&(et=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RG8UI),z===i.UNSIGNED_SHORT&&(et=i.RG16UI),z===i.UNSIGNED_INT&&(et=i.RG32UI),z===i.BYTE&&(et=i.RG8I),z===i.SHORT&&(et=i.RG16I),z===i.INT&&(et=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGB8UI),z===i.UNSIGNED_SHORT&&(et=i.RGB16UI),z===i.UNSIGNED_INT&&(et=i.RGB32UI),z===i.BYTE&&(et=i.RGB8I),z===i.SHORT&&(et=i.RGB16I),z===i.INT&&(et=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),z===i.UNSIGNED_INT&&(et=i.RGBA32UI),z===i.BYTE&&(et=i.RGBA8I),z===i.SHORT&&(et=i.RGBA16I),z===i.INT&&(et=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),b===i.RGBA){const Pt=j?us:me.getTransfer(J);z===i.FLOAT&&(et=i.RGBA32F),z===i.HALF_FLOAT&&(et=i.RGBA16F),z===i.UNSIGNED_BYTE&&(et=Pt===xe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(C,b){let z;return C?b===null||b===yi||b===tr?z=i.DEPTH24_STENCIL8:b===Fn?z=i.DEPTH32F_STENCIL8:b===_r&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===tr?z=i.DEPTH_COMPONENT24:b===Fn?z=i.DEPTH_COMPONENT32F:b===_r&&(z=i.DEPTH_COMPONENT16),z}function D(C,b){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==En?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function N(C){const b=C.target;b.removeEventListener("dispose",N),O(b),b.isVideoTexture&&p.delete(b)}function I(C){const b=C.target;b.removeEventListener("dispose",I),A(b)}function O(C){const b=n.get(C);if(b.__webglInit===void 0)return;const z=C.source,J=m.get(z);if(J){const j=J[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(C),Object.keys(J).length===0&&m.delete(z)}n.remove(C)}function T(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const z=C.source,J=m.get(z);delete J[b.__cacheKey],a.memory.textures--}function A(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let j=0;j<b.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(b.__webglFramebuffer[J][j]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let J=0,j=z.length;J<j;J++){const et=n.get(z[J]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(C)}let V=0;function R(){V=0}function k(){const C=V;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),V+=1,C}function S(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function H(C,b){const z=n.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,C,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function at(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function Z(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function nt(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){it(z,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const st={[xa]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},vt={[vn]:i.NEAREST,[sh]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Rs]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},X={[ch]:i.NEVER,[mh]:i.ALWAYS,[uh]:i.LESS,[Yl]:i.LEQUAL,[hh]:i.EQUAL,[ph]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Y(C,b){if(b.type===Fn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===En||b.magFilter===Rs||b.magFilter===Dr||b.magFilter===vi||b.minFilter===En||b.minFilter===Rs||b.minFilter===Dr||b.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,st[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,st[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,st[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,vt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,X[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==Dr&&b.minFilter!==vi||b.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",N));const J=b.source;let j=m.get(J);j===void 0&&(j={},m.set(J,j));const et=S(b);if(et!==C.__cacheKey){j[et]===void 0&&(j[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[et].usedTimes++;const Pt=j[C.__cacheKey];Pt!==void 0&&(j[C.__cacheKey].usedTimes--,Pt.usedTimes===0&&T(b)),C.__cacheKey=et,C.__webglTexture=j[et].texture}return z}function q(C,b,z){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const j=Lt(C,b),et=b.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+z);const Pt=n.get(et);if(et.version!==Pt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const xt=me.getPrimaries(me.workingColorSpace),Dt=b.colorSpace===Jn?null:me.getPrimaries(b.colorSpace),te=b.colorSpace===Jn||xt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let St=g(b.image,!1,r.maxTextureSize);St=W(b,St);const It=s.convert(b.format,b.colorSpace),Ot=s.convert(b.type);let $t=M(b.internalFormat,It,Ot,b.colorSpace,b.isVideoTexture);Y(J,b);let Bt;const Yt=b.mipmaps,ee=b.isVideoTexture!==!0,ge=Pt.__version===void 0||j===!0,$=et.dataReady,Ut=D(b,St);if(b.isDepthTexture)$t=w(b.format===er,b.type),ge&&(ee?e.texStorage2D(i.TEXTURE_2D,1,$t,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,$t,St.width,St.height,0,It,Ot,null));else if(b.isDataTexture)if(Yt.length>0){ee&&ge&&e.texStorage2D(i.TEXTURE_2D,Ut,$t,Yt[0].width,Yt[0].height);for(let dt=0,_t=Yt.length;dt<_t;dt++)Bt=Yt[dt],ee?$&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,It,Ot,Bt.data):e.texImage2D(i.TEXTURE_2D,dt,$t,Bt.width,Bt.height,0,It,Ot,Bt.data);b.generateMipmaps=!1}else ee?(ge&&e.texStorage2D(i.TEXTURE_2D,Ut,$t,St.width,St.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,It,Ot,St.data)):e.texImage2D(i.TEXTURE_2D,0,$t,St.width,St.height,0,It,Ot,St.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,$t,Yt[0].width,Yt[0].height,St.depth);for(let dt=0,_t=Yt.length;dt<_t;dt++)if(Bt=Yt[dt],b.format!==gn)if(It!==null)if(ee){if($)if(b.layerUpdates.size>0){const bt=Ko(Bt.width,Bt.height,b.format,b.type);for(const zt of b.layerUpdates){const qt=Bt.data.subarray(zt*bt/Bt.data.BYTES_PER_ELEMENT,(zt+1)*bt/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,zt,Bt.width,Bt.height,1,It,qt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,St.depth,It,Bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,$t,Bt.width,Bt.height,St.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Bt.width,Bt.height,St.depth,It,Ot,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,$t,Bt.width,Bt.height,St.depth,0,It,Ot,Bt.data)}else{ee&&ge&&e.texStorage2D(i.TEXTURE_2D,Ut,$t,Yt[0].width,Yt[0].height);for(let dt=0,_t=Yt.length;dt<_t;dt++)Bt=Yt[dt],b.format!==gn?It!==null?ee?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,It,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,$t,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?$&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Bt.width,Bt.height,It,Ot,Bt.data):e.texImage2D(i.TEXTURE_2D,dt,$t,Bt.width,Bt.height,0,It,Ot,Bt.data)}else if(b.isDataArrayTexture)if(ee){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,$t,St.width,St.height,St.depth),$)if(b.layerUpdates.size>0){const dt=Ko(St.width,St.height,b.format,b.type);for(const _t of b.layerUpdates){const bt=St.data.subarray(_t*dt/St.data.BYTES_PER_ELEMENT,(_t+1)*dt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,It,Ot,bt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,It,Ot,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,St.width,St.height,St.depth,0,It,Ot,St.data);else if(b.isData3DTexture)ee?(ge&&e.texStorage3D(i.TEXTURE_3D,Ut,$t,St.width,St.height,St.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,It,Ot,St.data)):e.texImage3D(i.TEXTURE_3D,0,$t,St.width,St.height,St.depth,0,It,Ot,St.data);else if(b.isFramebufferTexture){if(ge)if(ee)e.texStorage2D(i.TEXTURE_2D,Ut,$t,St.width,St.height);else{let dt=St.width,_t=St.height;for(let bt=0;bt<Ut;bt++)e.texImage2D(i.TEXTURE_2D,bt,$t,dt,_t,0,It,Ot,null),dt>>=1,_t>>=1}}else if(Yt.length>0){if(ee&&ge){const dt=ot(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ut,$t,dt.width,dt.height)}for(let dt=0,_t=Yt.length;dt<_t;dt++)Bt=Yt[dt],ee?$&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,It,Ot,Bt):e.texImage2D(i.TEXTURE_2D,dt,$t,It,Ot,Bt);b.generateMipmaps=!1}else if(ee){if(ge){const dt=ot(St);e.texStorage2D(i.TEXTURE_2D,Ut,$t,dt.width,dt.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Ot,St)}else e.texImage2D(i.TEXTURE_2D,0,$t,It,Ot,St);f(b)&&c(J),Pt.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function it(C,b,z){if(b.image.length!==6)return;const J=Lt(C,b),j=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const et=n.get(j);if(j.version!==et.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const Pt=me.getPrimaries(me.workingColorSpace),xt=b.colorSpace===Jn?null:me.getPrimaries(b.colorSpace),Dt=b.colorSpace===Jn||Pt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!te&&!St?It[_t]=g(b.image[_t],!0,r.maxCubemapSize):It[_t]=St?b.image[_t].image:b.image[_t],It[_t]=W(b,It[_t]);const Ot=It[0],$t=s.convert(b.format,b.colorSpace),Bt=s.convert(b.type),Yt=M(b.internalFormat,$t,Bt,b.colorSpace),ee=b.isVideoTexture!==!0,ge=et.__version===void 0||J===!0,$=j.dataReady;let Ut=D(b,Ot);Y(i.TEXTURE_CUBE_MAP,b);let dt;if(te){ee&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Yt,Ot.width,Ot.height);for(let _t=0;_t<6;_t++){dt=It[_t].mipmaps;for(let bt=0;bt<dt.length;bt++){const zt=dt[bt];b.format!==gn?$t!==null?ee?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt,0,0,zt.width,zt.height,$t,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt,0,0,zt.width,zt.height,$t,Bt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt,Yt,zt.width,zt.height,0,$t,Bt,zt.data)}}}else{if(dt=b.mipmaps,ee&&ge){dt.length>0&&Ut++;const _t=ot(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Yt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){ee?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,$t,Bt,It[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,It[_t].width,It[_t].height,0,$t,Bt,It[_t].data);for(let bt=0;bt<dt.length;bt++){const qt=dt[bt].image[_t].image;ee?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt+1,0,0,qt.width,qt.height,$t,Bt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt+1,Yt,qt.width,qt.height,0,$t,Bt,qt.data)}}else{ee?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,$t,Bt,It[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Yt,$t,Bt,It[_t]);for(let bt=0;bt<dt.length;bt++){const zt=dt[bt];ee?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt+1,0,0,$t,Bt,zt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt+1,Yt,$t,Bt,zt.image[_t])}}}f(b)&&c(i.TEXTURE_CUBE_MAP),et.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ct(C,b,z,J,j,et){const Pt=s.convert(z.format,z.colorSpace),xt=s.convert(z.type),Dt=M(z.internalFormat,Pt,xt,z.colorSpace),te=n.get(b),St=n.get(z);if(St.__renderTarget=b,!te.__hasExternalTextures){const It=Math.max(1,b.width>>et),Ot=Math.max(1,b.height>>et);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,et,Dt,It,Ot,b.depth,0,Pt,xt,null):e.texImage2D(j,et,Dt,It,Ot,0,Pt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,St.__webglTexture,0,tt(b)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,St.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(C,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const J=b.depthTexture,j=J&&J.isDepthTexture?J.type:null,et=w(b.stencilBuffer,j),Pt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=tt(b);F(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,et,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,et,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,et,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,C)}else{const J=b.textures;for(let j=0;j<J.length;j++){const et=J[j],Pt=s.convert(et.format,et.colorSpace),xt=s.convert(et.type),Dt=M(et.internalFormat,Pt,xt,et.colorSpace),te=tt(b);z&&F(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,Dt,b.width,b.height):F(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,Dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const j=J.__webglTexture,et=tt(b);if(b.depthTexture.format===qi)F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(b.depthTexture.format===er)F(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),At(b.__webglDepthbuffer[J],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),At(b.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,b,z){const J=n.get(C);b!==void 0&&Ct(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Vt(C)}function Qt(C){const b=C.texture,z=n.get(C),J=n.get(b);C.addEventListener("dispose",I);const j=C.textures,et=C.isWebGLCubeRenderTarget===!0,Pt=j.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),et){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)z.__webglFramebuffer[xt][Dt]=i.createFramebuffer()}else z.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)z.__webglFramebuffer[xt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let xt=0,Dt=j.length;xt<Dt;xt++){const te=n.get(j[xt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&F(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<j.length;xt++){const Dt=j[xt];z.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);const te=s.convert(Dt.format,Dt.colorSpace),St=s.convert(Dt.type),It=M(Dt.internalFormat,te,St,Dt.colorSpace,C.isXRRenderTarget===!0),Ot=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,It,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),At(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Y(i.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Ct(z.__webglFramebuffer[xt][Dt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt);else Ct(z.__webglFramebuffer[xt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);f(b)&&c(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let xt=0,Dt=j.length;xt<Dt;xt++){const te=j[xt],St=n.get(te);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),Y(i.TEXTURE_2D,te),Ct(z.__webglFramebuffer,C,te,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),f(te)&&c(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),Y(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Ct(z.__webglFramebuffer[Dt],C,b,i.COLOR_ATTACHMENT0,xt,Dt);else Ct(z.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,xt,0);f(b)&&c(xt),e.unbindTexture()}C.depthBuffer&&Vt(C)}function oe(C){const b=C.textures;for(let z=0,J=b.length;z<J;z++){const j=b[z];if(f(j)){const et=E(C),Pt=n.get(j).__webglTexture;e.bindTexture(et,Pt),c(et),e.unbindTexture()}}}const Zt=[],_=[];function pt(C){if(C.samples>0){if(F(C)===!1){const b=C.textures,z=C.width,J=C.height;let j=i.COLOR_BUFFER_BIT;const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(C),xt=b.length>1;if(xt)for(let Dt=0;Dt<b.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Dt=0;Dt<b.length;Dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);const te=n.get(b[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,j,i.NEAREST),l===!0&&(Zt.length=0,_.length=0,Zt.push(i.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Zt.push(et),_.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Dt=0;Dt<b.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Dt]);const te=n.get(b[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function tt(C){return Math.min(r.maxSamples,C.samples)}function F(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function L(C){const b=a.render.frame;p.get(C)!==b&&(p.set(C,b),C.update())}function W(C,b){const z=C.colorSpace,J=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==nr&&z!==Jn&&(me.getTransfer(z)===xe?(J!==gn||j!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=R,this.setTexture2D=H,this.setTexture2DArray=at,this.setTexture3D=Z,this.setTextureCube=nt,this.rebindTextures=Ht,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=F}function I_(i,t){function e(n,r=Jn){let s;const a=me.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.BYTE;if(n===kl)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===yr)return i.HALF_FLOAT;if(n===zl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===gn)return i.RGBA;if(n===Hl)return i.LUMINANCE;if(n===Gl)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Xl)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===so)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ns)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ns)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Sa||n===Ea||n===Ma)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ba)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Aa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wa||n===Ta)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Ra||n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===Ba||n===za||n===Va)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ca)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===Ha||n===Ga)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===as)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Wa||n===Xa||n===$a)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===as)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:U_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Mi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,p=null,d=null,m=null,h=null,x=null;const g=new F_,f=e.getContextAttributes();let c=null,E=null;const M=[],w=[],D=new se;let N=null;const I=new ln;I.viewport=new Ce;const O=new ln;O.viewport=new Ce;const T=[I,O],A=new nd;let V=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=M[q];return it===void 0&&(it=new Zs,M[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=M[q];return it===void 0&&(it=new Zs,M[q]=it),it.getGripSpace()},this.getHand=function(q){let it=M[q];return it===void 0&&(it=new Zs,M[q]=it),it.getHandSpace()};function k(q){const it=w.indexOf(q.inputSource);if(it===-1)return;const Ct=M[it];Ct!==void 0&&(Ct.update(q.inputSource,q.frame,u||a),Ct.dispatchEvent({type:q.type,data:q.inputSource}))}function S(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",S),r.removeEventListener("inputsourceschange",H);for(let q=0;q<M.length;q++){const it=w[q];it!==null&&(w[q]=null,M[q].disconnect(it))}V=null,R=null,g.reset(),t.setRenderTarget(c),h=null,m=null,d=null,r=null,E=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(N),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return m!==null?m:h},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(c=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",S),r.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,At=null,Rt=null;f.depth&&(Rt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=f.stencil?er:qi,At=f.stencil?tr:yi);const Vt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};d=new XRWebGLBinding(r,e),m=d.createProjectionLayer(Vt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),E=new bi(m.textureWidth,m.textureHeight,{format:gn,type:Bn,depthTexture:new ac(m.textureWidth,m.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ct={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,Ct),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new bi(h.framebufferWidth,h.framebufferHeight,{format:gn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Lt.setContext(r),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(q){for(let it=0;it<q.removed.length;it++){const Ct=q.removed[it],At=w.indexOf(Ct);At>=0&&(w[At]=null,M[At].disconnect(Ct))}for(let it=0;it<q.added.length;it++){const Ct=q.added[it];let At=w.indexOf(Ct);if(At===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=w.length){w.push(Ct),At=Vt;break}else if(w[Vt]===null){w[Vt]=Ct,At=Vt;break}if(At===-1)break}const Rt=M[At];Rt&&Rt.connect(Ct)}}const at=new ct,Z=new ct;function nt(q,it,Ct){at.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(Ct.matrixWorld);const At=at.distanceTo(Z),Rt=it.projectionMatrix.elements,Vt=Ct.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),Qt=Rt[14]/(Rt[10]+1),oe=(Rt[9]+1)/Rt[5],Zt=(Rt[9]-1)/Rt[5],_=(Rt[8]-1)/Rt[0],pt=(Vt[8]+1)/Vt[0],tt=Ht*_,F=Ht*pt,L=At/(-_+pt),W=L*-_;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(W),q.translateZ(L),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const ot=Ht+L,C=Qt+L,b=tt-W,z=F+(At-W),J=oe*Qt/C*ot,j=Zt*Qt/C*ot;q.projectionMatrix.makePerspective(b,z,J,j,ot,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let it=q.near,Ct=q.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(Ct=g.depthFar)),A.near=O.near=I.near=it,A.far=O.far=I.far=Ct,(V!==A.near||R!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),V=A.near,R=A.far),I.layers.mask=q.layers.mask|2,O.layers.mask=q.layers.mask|4,A.layers.mask=I.layers.mask|O.layers.mask;const At=q.parent,Rt=A.cameras;st(A,At);for(let Vt=0;Vt<Rt.length;Vt++)st(Rt[Vt],At);Rt.length===2?nt(A,I,O):A.projectionMatrix.copy(I.projectionMatrix),vt(q,A,At)};function vt(q,it,Ct){Ct===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(Ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ja*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&h===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)};let X=null;function Y(q,it){if(p=it.getViewerPose(u||a),x=it,p!==null){const Ct=p.views;h!==null&&(t.setRenderTargetFramebuffer(E,h.framebuffer),t.setRenderTarget(E));let At=!1;Ct.length!==A.cameras.length&&(A.cameras.length=0,At=!0);for(let Ht=0;Ht<Ct.length;Ht++){const Qt=Ct[Ht];let oe=null;if(h!==null)oe=h.getViewport(Qt);else{const _=d.getViewSubImage(m,Qt);oe=_.viewport,Ht===0&&(t.setRenderTargetTextures(E,_.colorTexture,m.ignoreDepthValues?void 0:_.depthStencilTexture),t.setRenderTarget(E))}let Zt=T[Ht];Zt===void 0&&(Zt=new ln,Zt.layers.enable(Ht),Zt.viewport=new Ce,T[Ht]=Zt),Zt.matrix.fromArray(Qt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Qt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(oe.x,oe.y,oe.width,oe.height),Ht===0&&(A.matrix.copy(Zt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),At===!0&&A.cameras.push(Zt)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const Ht=d.getDepthInformation(Ct[0]);Ht&&Ht.isValid&&Ht.texture&&g.init(t,Ht,r.renderState)}}for(let Ct=0;Ct<M.length;Ct++){const At=w[Ct],Rt=M[Ct];At!==null&&Rt!==void 0&&Rt.update(At,it,u||a)}X&&X(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),x=null}const Lt=new cc;Lt.setAnimationLoop(Y),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}}const di=new zn,k_=new Re;function B_(i,t){function e(f,c){f.matrixAutoUpdate===!0&&f.updateMatrix(),c.value.copy(f.matrix)}function n(f,c){c.color.getRGB(f.fogColor.value,ic(i)),c.isFog?(f.fogNear.value=c.near,f.fogFar.value=c.far):c.isFogExp2&&(f.fogDensity.value=c.density)}function r(f,c,E,M,w){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(f,c):c.isMeshToonMaterial?(s(f,c),d(f,c)):c.isMeshPhongMaterial?(s(f,c),p(f,c)):c.isMeshStandardMaterial?(s(f,c),m(f,c),c.isMeshPhysicalMaterial&&h(f,c,w)):c.isMeshMatcapMaterial?(s(f,c),x(f,c)):c.isMeshDepthMaterial?s(f,c):c.isMeshDistanceMaterial?(s(f,c),g(f,c)):c.isMeshNormalMaterial?s(f,c):c.isLineBasicMaterial?(a(f,c),c.isLineDashedMaterial&&o(f,c)):c.isPointsMaterial?l(f,c,E,M):c.isSpriteMaterial?u(f,c):c.isShadowMaterial?(f.color.value.copy(c.color),f.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(f,c){f.opacity.value=c.opacity,c.color&&f.diffuse.value.copy(c.color),c.emissive&&f.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.bumpMap&&(f.bumpMap.value=c.bumpMap,e(c.bumpMap,f.bumpMapTransform),f.bumpScale.value=c.bumpScale,c.side===Je&&(f.bumpScale.value*=-1)),c.normalMap&&(f.normalMap.value=c.normalMap,e(c.normalMap,f.normalMapTransform),f.normalScale.value.copy(c.normalScale),c.side===Je&&f.normalScale.value.negate()),c.displacementMap&&(f.displacementMap.value=c.displacementMap,e(c.displacementMap,f.displacementMapTransform),f.displacementScale.value=c.displacementScale,f.displacementBias.value=c.displacementBias),c.emissiveMap&&(f.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,f.emissiveMapTransform)),c.specularMap&&(f.specularMap.value=c.specularMap,e(c.specularMap,f.specularMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest);const E=t.get(c),M=E.envMap,w=E.envMapRotation;M&&(f.envMap.value=M,di.copy(w),di.x*=-1,di.y*=-1,di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),f.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(di)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=c.reflectivity,f.ior.value=c.ior,f.refractionRatio.value=c.refractionRatio),c.lightMap&&(f.lightMap.value=c.lightMap,f.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,f.lightMapTransform)),c.aoMap&&(f.aoMap.value=c.aoMap,f.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,f.aoMapTransform))}function a(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform))}function o(f,c){f.dashSize.value=c.dashSize,f.totalSize.value=c.dashSize+c.gapSize,f.scale.value=c.scale}function l(f,c,E,M){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.size.value=c.size*E,f.scale.value=M*.5,c.map&&(f.map.value=c.map,e(c.map,f.uvTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function u(f,c){f.diffuse.value.copy(c.color),f.opacity.value=c.opacity,f.rotation.value=c.rotation,c.map&&(f.map.value=c.map,e(c.map,f.mapTransform)),c.alphaMap&&(f.alphaMap.value=c.alphaMap,e(c.alphaMap,f.alphaMapTransform)),c.alphaTest>0&&(f.alphaTest.value=c.alphaTest)}function p(f,c){f.specular.value.copy(c.specular),f.shininess.value=Math.max(c.shininess,1e-4)}function d(f,c){c.gradientMap&&(f.gradientMap.value=c.gradientMap)}function m(f,c){f.metalness.value=c.metalness,c.metalnessMap&&(f.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,f.metalnessMapTransform)),f.roughness.value=c.roughness,c.roughnessMap&&(f.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,f.roughnessMapTransform)),c.envMap&&(f.envMapIntensity.value=c.envMapIntensity)}function h(f,c,E){f.ior.value=c.ior,c.sheen>0&&(f.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),f.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(f.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,f.sheenColorMapTransform)),c.sheenRoughnessMap&&(f.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,f.sheenRoughnessMapTransform))),c.clearcoat>0&&(f.clearcoat.value=c.clearcoat,f.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(f.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,f.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(f.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Je&&f.clearcoatNormalScale.value.negate())),c.dispersion>0&&(f.dispersion.value=c.dispersion),c.iridescence>0&&(f.iridescence.value=c.iridescence,f.iridescenceIOR.value=c.iridescenceIOR,f.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(f.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,f.iridescenceMapTransform)),c.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),c.transmission>0&&(f.transmission.value=c.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),c.transmissionMap&&(f.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,f.transmissionMapTransform)),f.thickness.value=c.thickness,c.thicknessMap&&(f.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=c.attenuationDistance,f.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(f.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(f.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=c.specularIntensity,f.specularColor.value.copy(c.specularColor),c.specularColorMap&&(f.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,f.specularColorMapTransform)),c.specularIntensityMap&&(f.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,c){c.matcap&&(f.matcap.value=c.matcap)}function g(f,c){const E=t.get(c).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function u(E,M){let w=r[E.id];w===void 0&&(x(E),w=p(E),r[E.id]=w,E.addEventListener("dispose",f));const D=M.program;n.updateUBOMapping(E,D);const N=t.render.frame;s[E.id]!==N&&(m(E),s[E.id]=N)}function p(E){const M=d();E.__bindingPointIndex=M;const w=i.createBuffer(),D=E.__size,N=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){const M=r[E.id],w=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let N=0,I=w.length;N<I;N++){const O=Array.isArray(w[N])?w[N]:[w[N]];for(let T=0,A=O.length;T<A;T++){const V=O[T];if(h(V,N,T,D)===!0){const R=V.__offset,k=Array.isArray(V.value)?V.value:[V.value];let S=0;for(let H=0;H<k.length;H++){const at=k[H],Z=g(at);typeof at=="number"||typeof at=="boolean"?(V.__data[0]=at,i.bufferSubData(i.UNIFORM_BUFFER,R+S,V.__data)):at.isMatrix3?(V.__data[0]=at.elements[0],V.__data[1]=at.elements[1],V.__data[2]=at.elements[2],V.__data[3]=0,V.__data[4]=at.elements[3],V.__data[5]=at.elements[4],V.__data[6]=at.elements[5],V.__data[7]=0,V.__data[8]=at.elements[6],V.__data[9]=at.elements[7],V.__data[10]=at.elements[8],V.__data[11]=0):(at.toArray(V.__data,S),S+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,M,w,D){const N=E.value,I=M+"_"+w;if(D[I]===void 0)return typeof N=="number"||typeof N=="boolean"?D[I]=N:D[I]=N.clone(),!0;{const O=D[I];if(typeof N=="number"||typeof N=="boolean"){if(O!==N)return D[I]=N,!0}else if(O.equals(N)===!1)return O.copy(N),!0}return!1}function x(E){const M=E.uniforms;let w=0;const D=16;for(let I=0,O=M.length;I<O;I++){const T=Array.isArray(M[I])?M[I]:[M[I]];for(let A=0,V=T.length;A<V;A++){const R=T[A],k=Array.isArray(R.value)?R.value:[R.value];for(let S=0,H=k.length;S<H;S++){const at=k[S],Z=g(at),nt=w%D,st=nt%Z.boundary,vt=nt+st;w+=st,vt!==0&&D-vt<Z.storage&&(w+=D-vt),R.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=w,w+=Z.storage}}}const N=w%D;return N>0&&(w+=D-N),E.__size=w,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function f(E){const M=E.target;M.removeEventListener("dispose",f);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function c(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}class V_{constructor(t={}){const{canvas:e=vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const x=new Uint32Array(4),g=new Int32Array(4);let f=null,c=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=ti,this.toneMappingExposure=1;const w=this;let D=!1,N=0,I=0,O=null,T=-1,A=null;const V=new Ce,R=new Ce;let k=null;const S=new ve(0);let H=0,at=e.width,Z=e.height,nt=1,st=null,vt=null;const X=new Ce(0,0,at,Z),Y=new Ce(0,0,at,Z);let Lt=!1;const q=new lo;let it=!1,Ct=!1;this.transmissionResolutionScale=1;const At=new Re,Rt=new Re,Vt=new ct,Ht=new Ce,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Zt(){return O===null?nt:1}let _=n;function pt(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",zt,!1),_===null){const K="webgl2";if(_=pt(K,P),_===null)throw pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let tt,F,L,W,ot,C,b,z,J,j,et,Pt,xt,Dt,te,St,It,Ot,$t,Bt,Yt,ee,ge,$;function Ut(){tt=new Kp(_),tt.init(),ee=new I_(_,tt),F=new Wp(_,tt,t,ee),L=new D_(_,tt),F.reverseDepthBuffer&&m&&L.buffers.depth.setReversed(!0),W=new tm(_),ot=new v_,C=new L_(_,tt,L,ot,F,ee,W),b=new $p(w),z=new Zp(w),J=new sd(_),ge=new Hp(_,J),j=new Jp(_,J,W,ge),et=new nm(_,j,J,W),$t=new em(_,F,C),St=new Xp(ot),Pt=new g_(w,b,z,tt,F,ge,St),xt=new B_(w,ot),Dt=new y_,te=new T_(tt),Ot=new Vp(w,b,z,L,et,h,l),It=new R_(w,et,F),$=new z_(_,W,F,L),Bt=new Gp(_,tt,W),Yt=new Qp(_,tt,W),W.programs=Pt.programs,w.capabilities=F,w.extensions=tt,w.properties=ot,w.renderLists=Dt,w.shadowMap=It,w.state=L,w.info=W}Ut();const dt=new O_(w,_);this.xr=dt,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(P){P!==void 0&&(nt=P,this.setSize(at,Z,!1))},this.getSize=function(P){return P.set(at,Z)},this.setSize=function(P,K,ut=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=P,Z=K,e.width=Math.floor(P*nt),e.height=Math.floor(K*nt),ut===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(at*nt,Z*nt).floor()},this.setDrawingBufferSize=function(P,K,ut){at=P,Z=K,nt=ut,e.width=Math.floor(P*ut),e.height=Math.floor(K*ut),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(V)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,K,ut,ht){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,K,ut,ht),L.viewport(V.copy(X).multiplyScalar(nt).round())},this.getScissor=function(P){return P.copy(Y)},this.setScissor=function(P,K,ut,ht){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,K,ut,ht),L.scissor(R.copy(Y).multiplyScalar(nt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(P){L.setScissorTest(Lt=P)},this.setOpaqueSort=function(P){st=P},this.setTransparentSort=function(P){vt=P},this.getClearColor=function(P){return P.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ut=!0){let ht=0;if(P){let Q=!1;if(O!==null){const Mt=O.texture.format;Q=Mt===so||Mt===ro||Mt===io}if(Q){const Mt=O.texture.type,kt=Mt===Bn||Mt===yi||Mt===_r||Mt===tr||Mt===eo||Mt===no,Gt=Ot.getClearColor(),Wt=Ot.getClearAlpha(),Jt=Gt.r,Kt=Gt.g,Xt=Gt.b;kt?(x[0]=Jt,x[1]=Kt,x[2]=Xt,x[3]=Wt,_.clearBufferuiv(_.COLOR,0,x)):(g[0]=Jt,g[1]=Kt,g[2]=Xt,g[3]=Wt,_.clearBufferiv(_.COLOR,0,g))}else ht|=_.COLOR_BUFFER_BIT}K&&(ht|=_.DEPTH_BUFFER_BIT),ut&&(ht|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),Ot.dispose(),Dt.dispose(),te.dispose(),ot.dispose(),b.dispose(),z.dispose(),et.dispose(),ge.dispose(),$.dispose(),Pt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ar),dt.removeEventListener("sessionend",Tr),xn.stop()};function _t(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const P=W.autoReset,K=It.enabled,ut=It.autoUpdate,ht=It.needsUpdate,Q=It.type;Ut(),W.autoReset=P,It.enabled=K,It.autoUpdate=ut,It.needsUpdate=ht,It.type=Q}function zt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function qt(P){const K=P.target;K.removeEventListener("dispose",qt),de(K)}function de(P){Oe(P),ot.remove(P)}function Oe(P){const K=ot.get(P).programs;K!==void 0&&(K.forEach(function(ut){Pt.releaseProgram(ut)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ut,ht,Q,Mt){K===null&&(K=Qt);const kt=Q.isMesh&&Q.matrixWorld.determinant()<0,Gt=gs(P,K,ut,ht,Q);L.setMaterial(ht,kt);let Wt=ut.index,Jt=1;if(ht.wireframe===!0){if(Wt=j.getWireframeAttribute(ut),Wt===void 0)return;Jt=2}const Kt=ut.drawRange,Xt=ut.attributes.position;let ce=Kt.start*Jt,fe=(Kt.start+Kt.count)*Jt;Mt!==null&&(ce=Math.max(ce,Mt.start*Jt),fe=Math.min(fe,(Mt.start+Mt.count)*Jt)),Wt!==null?(ce=Math.max(ce,0),fe=Math.min(fe,Wt.count)):Xt!=null&&(ce=Math.max(ce,0),fe=Math.min(fe,Xt.count));const Te=fe-ce;if(Te<0||Te===1/0)return;ge.setup(Q,ht,Gt,ut,Wt);let be,ue=Bt;if(Wt!==null&&(be=J.get(Wt),ue=Yt,ue.setIndex(be)),Q.isMesh)ht.wireframe===!0?(L.setLineWidth(ht.wireframeLinewidth*Zt()),ue.setMode(_.LINES)):ue.setMode(_.TRIANGLES);else if(Q.isLine){let jt=ht.linewidth;jt===void 0&&(jt=1),L.setLineWidth(jt*Zt()),Q.isLineSegments?ue.setMode(_.LINES):Q.isLineLoop?ue.setMode(_.LINE_LOOP):ue.setMode(_.LINE_STRIP)}else Q.isPoints?ue.setMode(_.POINTS):Q.isSprite&&ue.setMode(_.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ue.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const jt=Q._multiDrawStarts,we=Q._multiDrawCounts,he=Q._multiDrawCount,en=Wt?J.get(Wt).bytesPerElement:1,Tn=ot.get(ht).currentProgram.getUniforms();for(let Me=0;Me<he;Me++)Tn.setValue(_,"_gl_DrawID",Me),ue.render(jt[Me]/en,we[Me])}else if(Q.isInstancedMesh)ue.renderInstances(ce,Te,Q.count);else if(ut.isInstancedBufferGeometry){const jt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,we=Math.min(ut.instanceCount,jt);ue.renderInstances(ce,Te,we)}else ue.render(ce,Te)};function _e(P,K,ut){P.transparent===!0&&P.side===Nn&&P.forceSinglePass===!1?(P.side=Je,P.needsUpdate=!0,Gn(P,K,ut),P.side=ei,P.needsUpdate=!0,Gn(P,K,ut),P.side=Nn):Gn(P,K,ut)}this.compile=function(P,K,ut=null){ut===null&&(ut=P),c=te.get(ut),c.init(K),M.push(c),ut.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(c.pushLight(Q),Q.castShadow&&c.pushShadow(Q))}),P!==ut&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(c.pushLight(Q),Q.castShadow&&c.pushShadow(Q))}),c.setupLights();const ht=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Mt=Q.material;if(Mt)if(Array.isArray(Mt))for(let kt=0;kt<Mt.length;kt++){const Gt=Mt[kt];_e(Gt,ut,Q),ht.add(Gt)}else _e(Mt,ut,Q),ht.add(Mt)}),c=M.pop(),ht},this.compileAsync=function(P,K,ut=null){const ht=this.compile(P,K,ut);return new Promise(Q=>{function Mt(){if(ht.forEach(function(kt){ot.get(kt).currentProgram.isReady()&&ht.delete(kt)}),ht.size===0){Q(P);return}setTimeout(Mt,10)}tt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let je=null;function tn(P){je&&je(P)}function ar(){xn.stop()}function Tr(){xn.start()}const xn=new cc;xn.setAnimationLoop(tn),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(P){je=P,dt.setAnimationLoop(P),P===null?xn.stop():xn.start()},dt.addEventListener("sessionstart",ar),dt.addEventListener("sessionend",Tr),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(K),K=dt.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,K,O),c=te.get(P,M.length),c.init(K),M.push(c),Rt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q.setFromProjectionMatrix(Rt),Ct=this.localClippingEnabled,it=St.init(this.clippingPlanes,Ct),f=Dt.get(P,E.length),f.init(),E.push(f),dt.enabled===!0&&dt.isPresenting===!0){const Mt=w.xr.getDepthSensingMesh();Mt!==null&&wi(Mt,K,-1/0,w.sortObjects)}wi(P,K,0,w.sortObjects),f.finish(),w.sortObjects===!0&&f.sort(st,vt),oe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,oe&&Ot.addToRenderList(f,P),this.info.render.frame++,it===!0&&St.beginShadows();const ut=c.state.shadowsArray;It.render(ut,P,K),it===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=f.opaque,Q=f.transmissive;if(c.setupLights(),K.isArrayCamera){const Mt=K.cameras;if(Q.length>0)for(let kt=0,Gt=Mt.length;kt<Gt;kt++){const Wt=Mt[kt];Ar(ht,Q,P,Wt)}oe&&Ot.render(P);for(let kt=0,Gt=Mt.length;kt<Gt;kt++){const Wt=Mt[kt];or(f,P,Wt,Wt.viewport)}}else Q.length>0&&Ar(ht,Q,P,K),oe&&Ot.render(P),or(f,P,K);O!==null&&I===0&&(C.updateMultisampleRenderTarget(O),C.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,K),ge.resetDefaultState(),T=-1,A=null,M.pop(),M.length>0?(c=M[M.length-1],it===!0&&St.setGlobalState(w.clippingPlanes,c.state.camera)):c=null,E.pop(),E.length>0?f=E[E.length-1]:f=null};function wi(P,K,ut,ht){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ut=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)c.pushLight(P),P.castShadow&&c.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){ht&&Ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Rt);const kt=et.update(P),Gt=P.material;Gt.visible&&f.push(P,kt,Gt,ut,Ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){const kt=et.update(P),Gt=P.material;if(ht&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ht.copy(P.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),Ht.copy(kt.boundingSphere.center)),Ht.applyMatrix4(P.matrixWorld).applyMatrix4(Rt)),Array.isArray(Gt)){const Wt=kt.groups;for(let Jt=0,Kt=Wt.length;Jt<Kt;Jt++){const Xt=Wt[Jt],ce=Gt[Xt.materialIndex];ce&&ce.visible&&f.push(P,kt,ce,ut,Ht.z,Xt)}}else Gt.visible&&f.push(P,kt,Gt,ut,Ht.z,null)}}const Mt=P.children;for(let kt=0,Gt=Mt.length;kt<Gt;kt++)wi(Mt[kt],K,ut,ht)}function or(P,K,ut,ht){const Q=P.opaque,Mt=P.transmissive,kt=P.transparent;c.setupLightsView(ut),it===!0&&St.setGlobalState(w.clippingPlanes,ut),ht&&L.viewport(V.copy(ht)),Q.length>0&&Ti(Q,K,ut),Mt.length>0&&Ti(Mt,K,ut),kt.length>0&&Ti(kt,K,ut),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Ar(P,K,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[ht.id]===void 0&&(c.state.transmissionRenderTarget[ht.id]=new bi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?yr:Bn,minFilter:vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const Mt=c.state.transmissionRenderTarget[ht.id],kt=ht.viewport||V;Mt.setSize(kt.z*w.transmissionResolutionScale,kt.w*w.transmissionResolutionScale);const Gt=w.getRenderTarget();w.setRenderTarget(Mt),w.getClearColor(S),H=w.getClearAlpha(),H<1&&w.setClearColor(16777215,.5),w.clear(),oe&&Ot.render(ut);const Wt=w.toneMapping;w.toneMapping=ti;const Jt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),c.setupLightsView(ht),it===!0&&St.setGlobalState(w.clippingPlanes,ht),Ti(P,ut,ht),C.updateMultisampleRenderTarget(Mt),C.updateRenderTargetMipmap(Mt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Xt=0,ce=K.length;Xt<ce;Xt++){const fe=K[Xt],Te=fe.object,be=fe.geometry,ue=fe.material,jt=fe.group;if(ue.side===Nn&&Te.layers.test(ht.layers)){const we=ue.side;ue.side=Je,ue.needsUpdate=!0,Hn(Te,ut,ht,be,ue,jt),ue.side=we,ue.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(Mt),C.updateRenderTargetMipmap(Mt))}w.setRenderTarget(Gt),w.setClearColor(S,H),Jt!==void 0&&(ht.viewport=Jt),w.toneMapping=Wt}function Ti(P,K,ut){const ht=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Mt=P.length;Q<Mt;Q++){const kt=P[Q],Gt=kt.object,Wt=kt.geometry,Jt=ht===null?kt.material:ht,Kt=kt.group;Gt.layers.test(ut.layers)&&Hn(Gt,K,ut,Wt,Jt,Kt)}}function Hn(P,K,ut,ht,Q,Mt){P.onBeforeRender(w,K,ut,ht,Q,Mt),P.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(w,K,ut,ht,P,Mt),Q.transparent===!0&&Q.side===Nn&&Q.forceSinglePass===!1?(Q.side=Je,Q.needsUpdate=!0,w.renderBufferDirect(ut,K,ht,Q,P,Mt),Q.side=ei,Q.needsUpdate=!0,w.renderBufferDirect(ut,K,ht,Q,P,Mt),Q.side=Nn):w.renderBufferDirect(ut,K,ht,Q,P,Mt),P.onAfterRender(w,K,ut,ht,Q,Mt)}function Gn(P,K,ut){K.isScene!==!0&&(K=Qt);const ht=ot.get(P),Q=c.state.lights,Mt=c.state.shadowsArray,kt=Q.state.version,Gt=Pt.getParameters(P,Q.state,Mt,K,ut),Wt=Pt.getProgramCacheKey(Gt);let Jt=ht.programs;ht.environment=P.isMeshStandardMaterial?K.environment:null,ht.fog=K.fog,ht.envMap=(P.isMeshStandardMaterial?z:b).get(P.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Jt===void 0&&(P.addEventListener("dispose",qt),Jt=new Map,ht.programs=Jt);let Kt=Jt.get(Wt);if(Kt!==void 0){if(ht.currentProgram===Kt&&ht.lightsStateVersion===kt)return Cr(P,Gt),Kt}else Gt.uniforms=Pt.getUniforms(P),P.onBeforeCompile(Gt,w),Kt=Pt.acquireProgram(Gt,Wt),Jt.set(Wt,Kt),ht.uniforms=Gt.uniforms;const Xt=ht.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xt.clippingPlanes=St.uniform),Cr(P,Gt),ht.needsLights=vs(P),ht.lightsStateVersion=kt,ht.needsLights&&(Xt.ambientLightColor.value=Q.state.ambient,Xt.lightProbe.value=Q.state.probe,Xt.directionalLights.value=Q.state.directional,Xt.directionalLightShadows.value=Q.state.directionalShadow,Xt.spotLights.value=Q.state.spot,Xt.spotLightShadows.value=Q.state.spotShadow,Xt.rectAreaLights.value=Q.state.rectArea,Xt.ltc_1.value=Q.state.rectAreaLTC1,Xt.ltc_2.value=Q.state.rectAreaLTC2,Xt.pointLights.value=Q.state.point,Xt.pointLightShadows.value=Q.state.pointShadow,Xt.hemisphereLights.value=Q.state.hemi,Xt.directionalShadowMap.value=Q.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xt.spotShadowMap.value=Q.state.spotShadowMap,Xt.spotLightMatrix.value=Q.state.spotLightMatrix,Xt.spotLightMap.value=Q.state.spotLightMap,Xt.pointShadowMap.value=Q.state.pointShadowMap,Xt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ht.currentProgram=Kt,ht.uniformsList=null,Kt}function Wn(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=ls.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Cr(P,K){const ut=ot.get(P);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function gs(P,K,ut,ht,Q){K.isScene!==!0&&(K=Qt),C.resetTextureUnits();const Mt=K.fog,kt=ht.isMeshStandardMaterial?K.environment:null,Gt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:nr,Wt=(ht.isMeshStandardMaterial?z:b).get(ht.envMap||kt),Jt=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Kt=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Xt=!!ut.morphAttributes.position,ce=!!ut.morphAttributes.normal,fe=!!ut.morphAttributes.color;let Te=ti;ht.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Te=w.toneMapping);const be=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ue=be!==void 0?be.length:0,jt=ot.get(ht),we=c.state.lights;if(it===!0&&(Ct===!0||P!==A)){const Ge=P===A&&ht.id===T;St.setState(ht,P,Ge)}let he=!1;ht.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==we.state.version||jt.outputColorSpace!==Gt||Q.isBatchedMesh&&jt.batching===!1||!Q.isBatchedMesh&&jt.batching===!0||Q.isBatchedMesh&&jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&jt.instancing===!1||!Q.isInstancedMesh&&jt.instancing===!0||Q.isSkinnedMesh&&jt.skinning===!1||!Q.isSkinnedMesh&&jt.skinning===!0||Q.isInstancedMesh&&jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&jt.instancingMorph===!1&&Q.morphTexture!==null||jt.envMap!==Wt||ht.fog===!0&&jt.fog!==Mt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==St.numPlanes||jt.numIntersection!==St.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==Kt||jt.morphTargets!==Xt||jt.morphNormals!==ce||jt.morphColors!==fe||jt.toneMapping!==Te||jt.morphTargetsCount!==ue)&&(he=!0):(he=!0,jt.__version=ht.version);let en=jt.currentProgram;he===!0&&(en=Gn(ht,K,Q));let Tn=!1,Me=!1,si=!1;const Se=en.getUniforms(),Ye=jt.uniforms;if(L.useProgram(en.program)&&(Tn=!0,Me=!0,si=!0),ht.id!==T&&(T=ht.id,Me=!0),Tn||A!==P){L.buffers.depth.getReversed()?(At.copy(P.projectionMatrix),yh(At),bh(At),Se.setValue(_,"projectionMatrix",At)):Se.setValue(_,"projectionMatrix",P.projectionMatrix),Se.setValue(_,"viewMatrix",P.matrixWorldInverse);const ke=Se.map.cameraPosition;ke!==void 0&&ke.setValue(_,Vt.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&Se.setValue(_,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Se.setValue(_,"isOrthographic",P.isOrthographicCamera===!0),A!==P&&(A=P,Me=!0,si=!0)}if(Q.isSkinnedMesh){Se.setOptional(_,Q,"bindMatrix"),Se.setOptional(_,Q,"bindMatrixInverse");const Ge=Q.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Se.setValue(_,"boneTexture",Ge.boneTexture,C))}Q.isBatchedMesh&&(Se.setOptional(_,Q,"batchingTexture"),Se.setValue(_,"batchingTexture",Q._matricesTexture,C),Se.setOptional(_,Q,"batchingIdTexture"),Se.setValue(_,"batchingIdTexture",Q._indirectTexture,C),Se.setOptional(_,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Se.setValue(_,"batchingColorTexture",Q._colorsTexture,C));const He=ut.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&$t.update(Q,ut,en),(Me||jt.receiveShadow!==Q.receiveShadow)&&(jt.receiveShadow=Q.receiveShadow,Se.setValue(_,"receiveShadow",Q.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Ye.envMap.value=Wt,Ye.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&K.environment!==null&&(Ye.envMapIntensity.value=K.environmentIntensity),Me&&(Se.setValue(_,"toneMappingExposure",w.toneMappingExposure),jt.needsLights&&ri(Ye,si),Mt&&ht.fog===!0&&xt.refreshFogUniforms(Ye,Mt),xt.refreshMaterialUniforms(Ye,ht,nt,Z,c.state.transmissionRenderTarget[P.id]),ls.upload(_,Wn(jt),Ye,C)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(ls.upload(_,Wn(jt),Ye,C),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Se.setValue(_,"center",Q.center),Se.setValue(_,"modelViewMatrix",Q.modelViewMatrix),Se.setValue(_,"normalMatrix",Q.normalMatrix),Se.setValue(_,"modelMatrix",Q.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Ge=ht.uniformsGroups;for(let ke=0,Ci=Ge.length;ke<Ci;ke++){const yn=Ge[ke];$.update(yn,en),$.bind(yn,en)}}return en}function ri(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function vs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,K,ut){ot.get(P.texture).__webglTexture=K,ot.get(P.depthTexture).__webglTexture=ut;const ht=ot.get(P);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=ut===void 0,ht.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const ut=ot.get(P);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const xs=_.createFramebuffer();this.setRenderTarget=function(P,K=0,ut=0){O=P,N=K,I=ut;let ht=!0,Q=null,Mt=!1,kt=!1;if(P){const Wt=ot.get(P);if(Wt.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(_.FRAMEBUFFER,null),ht=!1;else if(Wt.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(Wt.__hasExternalTextures)C.rebindTextures(P,ot.get(P.texture).__webglTexture,ot.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xt=P.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&ot.has(Xt)&&(P.width!==Xt.image.width||P.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);const Kt=ot.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Kt[K])?Q=Kt[K][ut]:Q=Kt[K],Mt=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?Q=ot.get(P).__webglMultisampledFramebuffer:Array.isArray(Kt)?Q=Kt[ut]:Q=Kt,V.copy(P.viewport),R.copy(P.scissor),k=P.scissorTest}else V.copy(X).multiplyScalar(nt).floor(),R.copy(Y).multiplyScalar(nt).floor(),k=Lt;if(ut!==0&&(Q=xs),L.bindFramebuffer(_.FRAMEBUFFER,Q)&&ht&&L.drawBuffers(P,Q),L.viewport(V),L.scissor(R),L.setScissorTest(k),Mt){const Wt=ot.get(P.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+K,Wt.__webglTexture,ut)}else if(kt){const Wt=ot.get(P.texture),Jt=K;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Wt.__webglTexture,ut,Jt)}else if(P!==null&&ut!==0){const Wt=ot.get(P.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Wt.__webglTexture,ut)}T=-1},this.readRenderTargetPixels=function(P,K,ut,ht,Q,Mt,kt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt){L.bindFramebuffer(_.FRAMEBUFFER,Gt);try{const Wt=P.texture,Jt=Wt.format,Kt=Wt.type;if(!F.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ht&&ut>=0&&ut<=P.height-Q&&_.readPixels(K,ut,ht,Q,ee.convert(Jt),ee.convert(Kt),Mt)}finally{const Wt=O!==null?ot.get(O).__webglFramebuffer:null;L.bindFramebuffer(_.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(P,K,ut,ht,Q,Mt,kt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt){const Wt=P.texture,Jt=Wt.format,Kt=Wt.type;if(!F.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ht&&ut>=0&&ut<=P.height-Q){L.bindFramebuffer(_.FRAMEBUFFER,Gt);const Xt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Xt),_.bufferData(_.PIXEL_PACK_BUFFER,Mt.byteLength,_.STREAM_READ),_.readPixels(K,ut,ht,Q,ee.convert(Jt),ee.convert(Kt),0);const ce=O!==null?ot.get(O).__webglFramebuffer:null;L.bindFramebuffer(_.FRAMEBUFFER,ce);const fe=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await xh(_,fe,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Xt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Mt),_.deleteBuffer(Xt),_.deleteSync(fe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,ut=0){P.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const ht=Math.pow(2,-ut),Q=Math.floor(P.image.width*ht),Mt=Math.floor(P.image.height*ht),kt=K!==null?K.x:0,Gt=K!==null?K.y:0;C.setTexture2D(P,0),_.copyTexSubImage2D(_.TEXTURE_2D,ut,0,0,kt,Gt,Q,Mt),L.unbindTexture()};const Ai=_.createFramebuffer(),ys=_.createFramebuffer();this.copyTextureToTexture=function(P,K,ut=null,ht=null,Q=0,Mt=null){P.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),ht=arguments[0]||null,P=arguments[1],K=arguments[2],Mt=arguments[3]||0,ut=null),Mt===null&&(Q!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Q,Q=0):Mt=0);let kt,Gt,Wt,Jt,Kt,Xt,ce,fe,Te;const be=P.isCompressedTexture?P.mipmaps[Mt]:P.image;if(ut!==null)kt=ut.max.x-ut.min.x,Gt=ut.max.y-ut.min.y,Wt=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,Kt=ut.min.y,Xt=ut.isBox3?ut.min.z:0;else{const He=Math.pow(2,-Q);kt=Math.floor(be.width*He),Gt=Math.floor(be.height*He),P.isDataArrayTexture?Wt=be.depth:P.isData3DTexture?Wt=Math.floor(be.depth*He):Wt=1,Jt=0,Kt=0,Xt=0}ht!==null?(ce=ht.x,fe=ht.y,Te=ht.z):(ce=0,fe=0,Te=0);const ue=ee.convert(K.format),jt=ee.convert(K.type);let we;K.isData3DTexture?(C.setTexture3D(K,0),we=_.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(C.setTexture2DArray(K,0),we=_.TEXTURE_2D_ARRAY):(C.setTexture2D(K,0),we=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,K.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,K.unpackAlignment);const he=_.getParameter(_.UNPACK_ROW_LENGTH),en=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(_.UNPACK_SKIP_PIXELS),Me=_.getParameter(_.UNPACK_SKIP_ROWS),si=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,be.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,be.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Jt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Xt);const Se=P.isDataArrayTexture||P.isData3DTexture,Ye=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const He=ot.get(P),Ge=ot.get(K),ke=ot.get(He.__renderTarget),Ci=ot.get(Ge.__renderTarget);L.bindFramebuffer(_.READ_FRAMEBUFFER,ke.__webglFramebuffer),L.bindFramebuffer(_.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let yn=0;yn<Wt;yn++)Se&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ot.get(P).__webglTexture,Q,Xt+yn),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Mt,Te+yn)),_.blitFramebuffer(Jt,Kt,kt,Gt,ce,fe,kt,Gt,_.DEPTH_BUFFER_BIT,_.NEAREST);L.bindFramebuffer(_.READ_FRAMEBUFFER,null),L.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||ot.has(P)){const He=ot.get(P),Ge=ot.get(K);L.bindFramebuffer(_.READ_FRAMEBUFFER,Ai),L.bindFramebuffer(_.DRAW_FRAMEBUFFER,ys);for(let ke=0;ke<Wt;ke++)Se?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,He.__webglTexture,Q,Xt+ke):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,He.__webglTexture,Q),Ye?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ge.__webglTexture,Mt,Te+ke):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ge.__webglTexture,Mt),Q!==0?_.blitFramebuffer(Jt,Kt,kt,Gt,ce,fe,kt,Gt,_.COLOR_BUFFER_BIT,_.NEAREST):Ye?_.copyTexSubImage3D(we,Mt,ce,fe,Te+ke,Jt,Kt,kt,Gt):_.copyTexSubImage2D(we,Mt,ce,fe,Jt,Kt,kt,Gt);L.bindFramebuffer(_.READ_FRAMEBUFFER,null),L.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Ye?P.isDataTexture||P.isData3DTexture?_.texSubImage3D(we,Mt,ce,fe,Te,kt,Gt,Wt,ue,jt,be.data):K.isCompressedArrayTexture?_.compressedTexSubImage3D(we,Mt,ce,fe,Te,kt,Gt,Wt,ue,be.data):_.texSubImage3D(we,Mt,ce,fe,Te,kt,Gt,Wt,ue,jt,be):P.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Mt,ce,fe,kt,Gt,ue,jt,be.data):P.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Mt,ce,fe,be.width,be.height,ue,be.data):_.texSubImage2D(_.TEXTURE_2D,Mt,ce,fe,kt,Gt,ue,jt,be);_.pixelStorei(_.UNPACK_ROW_LENGTH,he),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,en),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(_.UNPACK_SKIP_ROWS,Me),_.pixelStorei(_.UNPACK_SKIP_IMAGES,si),Mt===0&&K.generateMipmaps&&_.generateMipmap(we),L.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ut=null,ht=null,Q=0){return P.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,ht=arguments[1]||null,P=arguments[2],K=arguments[3],Q=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,ut,ht,Q)},this.initRenderTarget=function(P){ot.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),L.unbindTexture()},this.resetState=function(){N=0,I=0,O=null,L.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Sl={type:"change"},uo={type:"start"},pc={type:"end"},Qr=new Kl,El=new Kn,H_=Math.cos(70*gh.DEG2RAD),Ue=new ct,Ke=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sa=1e-6;class G_ extends id{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new ct,this.cursor=new ct,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ct,this._lastQuaternion=new Si,this._lastTargetPosition=new ct,this._quat=new Si().setFromUnitVectors(t.up,new ct(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zo,this._sphericalDelta=new Zo,this._scale=1,this._panOffset=new ct,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new ct,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X_.bind(this),this._onPointerDown=W_.bind(this),this._onPointerUp=$_.bind(this),this._onContextMenu=Q_.bind(this),this._onMouseWheel=q_.bind(this),this._onKeyDown=Z_.bind(this),this._onTouchStart=K_.bind(this),this._onTouchMove=J_.bind(this),this._onMouseDown=j_.bind(this),this._onMouseMove=Y_.bind(this),this._interceptControlDown=tg.bind(this),this._interceptControlUp=eg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sl),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),r<-Math.PI?r+=Ke:r>Math.PI&&(r-=Ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ue.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new ct(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new ct(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qr.origin.copy(this.object.position),Qr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qr.direction))<H_?this.object.lookAt(this.target):(El.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qr.intersectPlane(El,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sa||this._lastTargetPosition.distanceToSquared(this.target)>sa?(this.dispatchEvent(Sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ue.copy(r).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new se,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function W_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function X_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pc),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function j_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(uo)}function Y_(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function q_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(uo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pc))}function Z_(i){this.enabled!==!1&&this._handleKeyDown(i)}function K_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(uo)}function J_(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function Q_(i){this.enabled!==!1&&i.preventDefault()}function tg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class wn{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),wn.nextNameID=wn.nextNameID||0,this.$name.id=`lil-gui-name-${++wn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ng extends wn{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function qa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const ig={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:qa,toHexString:qa},gr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},rg={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,t,e=1){const n=gr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return gr.toHexString(r)}},sg={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=gr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return gr.toHexString(r)}},ag=[ig,gr,rg,sg];function og(i){return ag.find(t=>t.match(i))}class lg extends wn{constructor(t,e,n,r){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=og(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=qa(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class aa extends wn{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class cg extends wn{constructor(t,e,n,r,s,a){super(t,e,n,"lil-number"),this._initInput(),this.min(r),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+E),this.$input.value=this.getValue())},r=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},s=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let a=!1,o,l,u,p,d;const m=5,h=E=>{o=E.clientX,l=u=E.clientY,a=!0,p=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",g)},x=E=>{if(a){const M=E.clientX-o,w=E.clientY-l;Math.abs(w)>m?(E.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>m&&g()}if(!a){const M=E.clientY-u;d-=M*this._step*this._arrowKeyMultiplier(E),p+d>this._max?d=this._max-p:p+d<this._min&&(d=this._min-p),this._snapClampSetValue(p+d)}u=E.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",g)},f=()=>{this._inputFocused=!0},c=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",c)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(c,E,M,w,D)=>(c-E)/(M-E)*(D-w)+w,e=c=>{const E=this.$slider.getBoundingClientRect();let M=t(c,E.left,E.right,this._min,this._max);this._snapClampSetValue(M)},n=c=>{this._setDraggingStyle(!0),e(c.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=c=>{e(c.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,o,l;const u=c=>{c.preventDefault(),this._setDraggingStyle(!0),e(c.touches[0].clientX),a=!1},p=c=>{c.touches.length>1||(this._hasScrollBar?(o=c.touches[0].clientX,l=c.touches[0].clientY,a=!0):u(c),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",m))},d=c=>{if(a){const E=c.touches[0].clientX-o,M=c.touches[0].clientY-l;Math.abs(E)>Math.abs(M)?u(c):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m))}else c.preventDefault(),e(c.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",m)},h=this._callOnFinishChange.bind(this),x=400;let g;const f=c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)&&this._hasScrollBar)return;c.preventDefault();const M=this._normalizeMouseWheel(c)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(h,x)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ug extends wn{constructor(t,e,n,r){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class hg extends wn{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var dg=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function fg(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ml=!1;class ho{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Ml&&o&&(fg(dg),Ml=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(t,e,n,r,s){if(Object(n)===n)return new ug(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new cg(this,t,e,n,r,s);case"boolean":return new ng(this,t,e);case"string":return new hg(this,t,e);case"function":return new aa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new lg(this,t,e,n)}addFolder(t){const e=new ho({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof aa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof aa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const pg="modulepreload",mg=function(i){return"/"+i},wl={},_g=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=a(e.map(u=>{if(u=mg(u),u in wl)return;wl[u]=!0;const p=u.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":pg,p||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),p)return new Promise((h,x)=>{m.addEventListener("load",h),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var gg=(()=>{var i=import.meta.url;return(async function(t={}){var e,n=t,r,s,a=new Promise((v,y)=>{r=v,s=y}),o=typeof window=="object",l=typeof importScripts=="function",u=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(u){const{createRequire:v}=await _g(()=>import("./__vite-browser-external-BIHI7g3E.js"),[]);var p=v(import.meta.url)}var d=!1;n.setup=function(){if(d)return;d=!0,n.initTBB();function v(G,lt,gt=(Tt=>Tt)){if(lt)for(let Tt of lt)G.push_back(gt(Tt));return G}function y(G,lt=(gt=>gt)){const gt=[],Tt=G.size();for(let ie=0;ie<Tt;ie++)gt.push(lt(G.get(ie)));return gt}function U(G,lt=(gt=>gt)){const gt=[],Tt=G.size();for(let ie=0;ie<Tt;ie++){const Ee=G.get(ie),Pe=Ee.size(),nn=[];for(let ze=0;ze<Pe;ze++)nn.push(lt(Ee.get(ze)));gt.push(nn)}return gt}function B(G){return G[0].length<3&&(G=[G]),v(new n.Vector2_vec2,G,lt=>v(new n.Vector_vec2,lt,gt=>gt instanceof Array?{x:gt[0],y:gt[1]}:gt))}function rt(G){for(let lt=0;lt<G.size();lt++)G.get(lt).delete();G.delete()}function ft(G){return G[0]instanceof Array?{x:G[0][0],y:G[0][1]}:typeof G[0]=="number"?{x:G[0]||0,y:G[1]||0}:G[0]}function yt(G){return G[0]instanceof Array?{x:G[0][0],y:G[0][1],z:G[0][2]}:typeof G[0]=="number"?{x:G[0]||0,y:G[1]||0,z:G[2]||0}:G[0]}function mt(G){return G=="EvenOdd"?0:G=="NonZero"?1:G=="Negative"?3:2}function Et(G){return G=="Round"?1:G=="Miter"?2:0}const wt=n.CrossSection;function Nt(G,lt="Positive"){if(G instanceof wt)return G;{const gt=B(G),Tt=new wt(gt,mt(lt));return rt(gt),Tt}}n.CrossSection.prototype.translate=function(...G){return this._Translate(ft(G))},n.CrossSection.prototype.scale=function(G){return typeof G=="number"?this._Scale({x:G,y:G}):this._Scale(ft([G]))},n.CrossSection.prototype.mirror=function(G){return this._Mirror(ft([G]))},n.CrossSection.prototype.warp=function(G){const lt=lr(function(Tt){const ie=b(Tt,"double"),Ee=b(Tt+8,"double"),Pe=[ie,Ee];G(Pe),z(Tt,Pe[0],"double"),z(Tt+8,Pe[1],"double")},"vi"),gt=this._Warp(lt);return cr(lt),gt},n.CrossSection.prototype.decompose=function(){const G=this._Decompose(),lt=y(G);return G.delete(),lt},n.CrossSection.prototype.bounds=function(){const G=this._Bounds();return{min:["x","y"].map(lt=>G.min[lt]),max:["x","y"].map(lt=>G.max[lt])}},n.CrossSection.prototype.offset=function(G,lt="Round",gt=2,Tt=0){return this._Offset(G,Et(lt),gt,Tt)},n.CrossSection.prototype.simplify=function(G=1e-6){return this._Simplify(G)},n.CrossSection.prototype.extrude=function(G,lt=0,gt=0,Tt=[1,1],ie=!1){Tt=ft([Tt]);const Ee=n._Extrude(this._ToPolygons(),G,lt,gt,Tt);return ie?Ee.translate([0,0,-G/2]):Ee},n.CrossSection.prototype.revolve=function(G=0,lt=360){return n._Revolve(this._ToPolygons(),G,lt)},n.CrossSection.prototype.add=function(G){return this._add(Nt(G))},n.CrossSection.prototype.subtract=function(G){return this._subtract(Nt(G))},n.CrossSection.prototype.intersect=function(G){return this._intersect(Nt(G))},n.CrossSection.prototype.toPolygons=function(){const G=this._ToPolygons(),lt=U(G,gt=>[gt.x,gt.y]);return G.delete(),lt},n.Manifold.prototype.smoothOut=function(G=60,lt=0){return this._SmoothOut(G,lt)},n.Manifold.prototype.warp=function(G){const lt=lr(function(ie){const Ee=b(ie,"double"),Pe=b(ie+8,"double"),nn=b(ie+16,"double"),ze=[Ee,Pe,nn];G(ze),z(ie,ze[0],"double"),z(ie+8,ze[1],"double"),z(ie+16,ze[2],"double")},"vi"),gt=this._Warp(lt);cr(lt);const Tt=gt.status();if(Tt!=="NoError")throw new n.ManifoldError(Tt);return gt},n.Manifold.prototype.calculateNormals=function(G,lt=60){return this._CalculateNormals(G,lt)},n.Manifold.prototype.setProperties=function(G,lt){const gt=this.numProp(),Tt=lr(function(Ee,Pe,nn){const ze=[];for(let De=0;De<G;++De)ze[De]=b(Ee+8*De,"double");const Ri=[];for(let De=0;De<3;++De)Ri[De]=b(Pe+8*De,"double");const Pi=[];for(let De=0;De<gt;++De)Pi[De]=b(nn+8*De,"double");lt(ze,Ri,Pi);for(let De=0;De<G;++De)z(Ee+8*De,ze[De],"double")},"viii"),ie=this._SetProperties(G,Tt);return cr(Tt),ie},n.Manifold.prototype.translate=function(...G){return this._Translate(yt(G))},n.Manifold.prototype.rotate=function(G,lt,gt){return Array.isArray(G)?this._Rotate(...G):this._Rotate(G,lt||0,gt||0)},n.Manifold.prototype.scale=function(G){return typeof G=="number"?this._Scale({x:G,y:G,z:G}):this._Scale(yt([G]))},n.Manifold.prototype.mirror=function(G){return this._Mirror(yt([G]))},n.Manifold.prototype.trimByPlane=function(G,lt=0){return this._TrimByPlane(yt([G]),lt)},n.Manifold.prototype.slice=function(G=0){const lt=this._Slice(G),gt=new wt(lt,mt("Positive"));return rt(lt),gt},n.Manifold.prototype.project=function(){const G=this._Project(),lt=new wt(G,mt("Positive"));return rt(G),lt},n.Manifold.prototype.split=function(G){const lt=this._Split(G),gt=y(lt);return lt.delete(),gt},n.Manifold.prototype.splitByPlane=function(G,lt=0){const gt=this._SplitByPlane(yt([G]),lt),Tt=y(gt);return gt.delete(),Tt},n.Manifold.prototype.decompose=function(){const G=this._Decompose(),lt=y(G);return G.delete(),lt},n.Manifold.prototype.boundingBox=function(){const G=this._boundingBox();return{min:["x","y","z"].map(lt=>G.min[lt]),max:["x","y","z"].map(lt=>G.max[lt])}};class ne{constructor({numProp:lt=3,triVerts:gt=new Uint32Array,vertProperties:Tt=new Float32Array,mergeFromVert:ie,mergeToVert:Ee,runIndex:Pe,runOriginalID:nn,faceID:ze,halfedgeTangent:Ri,runTransform:Pi}={}){this.numProp=lt,this.triVerts=gt,this.vertProperties=Tt,this.mergeFromVert=ie,this.mergeToVert=Ee,this.runIndex=Pe,this.runOriginalID=nn,this.faceID=ze,this.halfedgeTangent=Ri,this.runTransform=Pi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:lt,mesh:gt}=n._Merge(this);return Object.assign(this,{...gt}),lt}verts(lt){return this.triVerts.subarray(3*lt,3*(lt+1))}position(lt){return this.vertProperties.subarray(this.numProp*lt,this.numProp*lt+3)}extras(lt){return this.vertProperties.subarray(this.numProp*lt+3,this.numProp*(lt+1))}tangent(lt){return this.halfedgeTangent.subarray(4*lt,4*(lt+1))}transform(lt){const gt=new Array(16);for(const Tt of[0,1,2,3])for(const ie of[0,1,2])gt[4*Tt+ie]=this.runTransform[12*lt+3*Tt+ie];return gt[15]=1,gt}}n.Mesh=ne,n.Manifold.prototype.getMesh=function(G=-1){return new ne(this._GetMeshJS(G))},n.ManifoldError=function(lt,...gt){let Tt="Unknown error";switch(lt){case"NonFiniteVertex":Tt="Non-finite vertex";break;case"NotManifold":Tt="Not manifold";break;case"VertexOutOfBounds":Tt="Vertex index out of bounds";break;case"PropertiesWrongLength":Tt="Properties have wrong length";break;case"MissingPositionProperties":Tt="Less than three properties";break;case"MergeVectorsDifferentLengths":Tt="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":Tt="Merge index out of bounds";break;case"TransformWrongLength":Tt="Transform vector has wrong length";break;case"RunIndexWrongLength":Tt="Run index vector has wrong length";break;case"FaceIDWrongLength":Tt="Face ID vector has wrong length";case"InvalidConstruction":Tt="Manifold constructed with invalid parameters"}const ie=Error.apply(this,[Tt,...gt]);ie.name=this.name="ManifoldError",this.message=ie.message,this.stack=ie.stack,this.code=lt},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(G,lt="Positive"){const gt=B(G),Tt=new wt(gt,mt(lt));return rt(gt),Tt},n.CrossSection.ofPolygons=function(G,lt="Positive"){return new n.CrossSection(G,lt)},n.CrossSection.square=function(...G){let lt;G.length==0?lt={x:1,y:1}:typeof G[0]=="number"?lt={x:G[0],y:G[0]}:lt=ft(G);const gt=G[1]||!1;return n._Square(lt,gt)},n.CrossSection.circle=function(G,lt=0){return n._Circle(G,lt)};function pe(G){return function(...lt){lt.length==1&&(lt=lt[0]);const gt=new n.Vector_crossSection;for(const ie of lt)gt.push_back(Nt(ie));const Tt=n["_crossSection"+G](gt);return gt.delete(),Tt}}n.CrossSection.compose=pe("Compose"),n.CrossSection.union=pe("UnionN"),n.CrossSection.difference=pe("DifferenceN"),n.CrossSection.intersection=pe("IntersectionN");function Le(G,lt){v(G,lt,gt=>gt instanceof Array?{x:gt[0],y:gt[1]}:gt)}n.CrossSection.hull=function(...G){G.length==1&&(G=G[0]);let lt=new n.Vector_vec2;for(const Tt of G)if(Tt instanceof wt)n._crossSectionCollectVertices(lt,Tt);else if(Tt instanceof Array&&Tt.length==2&&typeof Tt[0]=="number")lt.push_back({x:Tt[0],y:Tt[1]});else if(Tt.x)lt.push_back(Tt);else{const Ee=Tt[0].length==2&&typeof Tt[0][0]=="number"||Tt[0].x?[Tt]:Tt;for(const Pe of Ee)Le(lt,Pe)}const gt=n._crossSectionHullPoints(lt);return lt.delete(),gt},n.CrossSection.prototype=Object.create(wt.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>G=>G instanceof wt});const Ae=n.Manifold;n.Manifold=function(G){const lt=new Ae(G),gt=lt.status();if(gt!=="NoError")throw new n.ManifoldError(gt);return lt},n.Manifold.ofMesh=function(G){return new n.Manifold(G)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...G){let lt;G.length==0?lt={x:1,y:1,z:1}:typeof G[0]=="number"?lt={x:G[0],y:G[0],z:G[0]}:lt=yt(G);const gt=G[1]||!1;return n._Cube(lt,gt)},n.Manifold.cylinder=function(G,lt,gt=-1,Tt=0,ie=!1){return n._Cylinder(G,lt,gt,Tt,ie)},n.Manifold.sphere=function(G,lt=0){return n._Sphere(G,lt)},n.Manifold.smooth=function(G,lt=[]){const gt=new n.Vector_smoothness;v(gt,lt);const Tt=n._Smooth(G,gt);return gt.delete(),Tt},n.Manifold.extrude=function(G,lt,gt=0,Tt=0,ie=[1,1],Ee=!1){return(G instanceof wt?G:n.CrossSection(G,"Positive")).extrude(lt,gt,Tt,ie,Ee)},n.Manifold.revolve=function(G,lt=0,gt=360){return(G instanceof wt?G:n.CrossSection(G,"Positive")).revolve(lt,gt)},n.Manifold.reserveIDs=function(G){return n._ReserveIDs(G)},n.Manifold.compose=function(G){const lt=new n.Vector_manifold;v(lt,G);const gt=n._manifoldCompose(lt);return lt.delete(),gt};function hn(G){return function(...lt){lt.length==1&&(lt=lt[0]);const gt=new n.Vector_manifold;for(const ie of lt)gt.push_back(ie);const Tt=n["_manifold"+G+"N"](gt);return gt.delete(),Tt}}n.Manifold.union=hn("Union"),n.Manifold.difference=hn("Difference"),n.Manifold.intersection=hn("Intersection"),n.Manifold.levelSet=function(G,lt,gt,Tt=0,ie=-1){const Ee={min:{x:lt.min[0],y:lt.min[1],z:lt.min[2]},max:{x:lt.max[0],y:lt.max[1],z:lt.max[2]}},Pe=lr(function(ze){const Ri=b(ze,"double"),Pi=b(ze+8,"double"),De=b(ze+16,"double");return G([Ri,Pi,De])},"di"),nn=n._LevelSet(Pe,Ee,gt,Tt,ie);return cr(Pe),nn};function dn(G,lt){v(G,lt,gt=>gt instanceof Array?{x:gt[0],y:gt[1],z:gt[2]}:gt)}n.Manifold.hull=function(...G){G.length==1&&(G=G[0]);let lt=new n.Vector_vec3;for(const Tt of G)Tt instanceof Ae?n._manifoldCollectVertices(lt,Tt):Tt instanceof Array&&Tt.length==3&&typeof Tt[0]=="number"?lt.push_back({x:Tt[0],y:Tt[1],z:Tt[2]}):Tt.x?lt.push_back(Tt):dn(lt,Tt);const gt=n._manifoldHullPoints(lt);return lt.delete(),gt},n.Manifold.prototype=Object.create(Ae.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>G=>G instanceof Ae}),n.triangulate=function(G,lt=-1,gt=!0){const Tt=B(G),ie=y(n._Triangulate(Tt,lt,gt),Ee=>[Ee[0],Ee[1],Ee[2]]);return rt(Tt),ie}};var m=Object.assign({},n),h="";function x(v){return n.locateFile?n.locateFile(v,h):h+v}var g,f;if(u){var c=p("fs"),E=p("path");h=p("url").fileURLToPath(new URL("/assets/manifold-B8h_vZ5O.js",import.meta.url)),f=v=>{v=oe(v)?new URL(v):E.normalize(v);var y=c.readFileSync(v);return y},g=(v,y=!0)=>(v=oe(v)?new URL(v):E.normalize(v),new Promise((U,B)=>{c.readFile(v,y?void 0:"utf8",(rt,ft)=>{rt?B(rt):U(y?ft.buffer:ft)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(o||l)&&(l?h=self.location.href:typeof document<"u"&&document.currentScript&&(h=document.currentScript.src),i&&(h=i),h.startsWith("blob:")?h="":h=h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1),l&&(f=v=>{var y=new XMLHttpRequest;return y.open("GET",v,!1),y.responseType="arraybuffer",y.send(null),new Uint8Array(y.response)}),g=v=>oe(v)?new Promise((y,U)=>{var B=new XMLHttpRequest;B.open("GET",v,!0),B.responseType="arraybuffer",B.onload=()=>{(B.status==200||B.status==0&&B.response)&&U(B.response),y(B.status)},B.onerror=y,B.send(null)}):fetch(v,{credentials:"same-origin"}).then(y=>y.ok?y.arrayBuffer():Promise.reject(new Error(y.status+" : "+y.url))));n.print||console.log.bind(console);var M=n.printErr||console.error.bind(console);Object.assign(n,m),m=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var w;n.wasmBinary&&(w=n.wasmBinary);var D,N=!1,I,O,T,A,V,R,k,S;function H(){var v=D.buffer;n.HEAP8=I=new Int8Array(v),n.HEAP16=T=new Int16Array(v),n.HEAPU8=O=new Uint8Array(v),n.HEAPU16=A=new Uint16Array(v),n.HEAP32=V=new Int32Array(v),n.HEAPU32=R=new Uint32Array(v),n.HEAPF32=k=new Float32Array(v),n.HEAPF64=S=new Float64Array(v)}var at=[],Z=[],nt=[];function st(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Y(n.preRun.shift());C(at)}function vt(){C(Z)}function X(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)q(n.postRun.shift());C(nt)}function Y(v){at.unshift(v)}function Lt(v){Z.unshift(v)}function q(v){nt.unshift(v)}var it=0,Ct=null;function At(v){it++,n.monitorRunDependencies?.(it)}function Rt(v){if(it--,n.monitorRunDependencies?.(it),it==0&&Ct){var y=Ct;Ct=null,y()}}function Vt(v){n.onAbort?.(v),v="Aborted("+v+")",M(v),N=!0,v+=". Build with -sASSERTIONS for more info.";var y=new WebAssembly.RuntimeError(v);throw s(y),y}var Ht="data:application/octet-stream;base64,",Qt=v=>v.startsWith(Ht),oe=v=>v.startsWith("file://");function Zt(){if(n.locateFile){var v="manifold.wasm";return Qt(v)?v:x(v)}return new URL("/assets/manifold-D9yvTBHx.wasm",import.meta.url).href}var _;function pt(v){if(v==_&&w)return new Uint8Array(w);if(f)return f(v);throw"both async and sync fetching of the wasm failed"}function tt(v){return w?Promise.resolve().then(()=>pt(v)):g(v).then(y=>new Uint8Array(y),()=>pt(v))}function F(v,y,U){return tt(v).then(B=>WebAssembly.instantiate(B,y)).then(U,B=>{M(`failed to asynchronously prepare wasm: ${B}`),Vt(B)})}function L(v,y,U,B){return!v&&typeof WebAssembly.instantiateStreaming=="function"&&!Qt(y)&&!oe(y)&&!u&&typeof fetch=="function"?fetch(y,{credentials:"same-origin"}).then(rt=>{var ft=WebAssembly.instantiateStreaming(rt,U);return ft.then(B,function(yt){return M(`wasm streaming compile failed: ${yt}`),M("falling back to ArrayBuffer instantiation"),F(y,U,B)})}):F(y,U,B)}function W(){return{a:Au}}function ot(){var v=W();function y(B,rt){return un=B.exports,un=Cu(un),D=un.J,H(),we=un.M,Lt(un.K),Rt(),un}At();function U(B){y(B.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(v,y)}catch(B){M(`Module.instantiateWasm callback failed with error: ${B}`),s(B)}return _||(_=Zt()),L(w,_,v,U).catch(s),{}}var C=v=>{for(;v.length>0;)v.shift()(n)};function b(v,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":return I[v>>>0];case"i8":return I[v>>>0];case"i16":return T[v>>>1>>>0];case"i32":return V[v>>>2>>>0];case"i64":Vt("to do getValue(i64) use WASM_BIGINT");case"float":return k[v>>>2>>>0];case"double":return S[v>>>3>>>0];case"*":return R[v>>>2>>>0];default:Vt(`invalid type for getValue: ${y}`)}}n.noExitRuntime;function z(v,y,U="i8"){switch(U.endsWith("*")&&(U="*"),U){case"i1":I[v>>>0]=y;break;case"i8":I[v>>>0]=y;break;case"i16":T[v>>>1>>>0]=y;break;case"i32":V[v>>>2>>>0]=y;break;case"i64":Vt("to do setValue(i64) use WASM_BIGINT");case"float":k[v>>>2>>>0]=y;break;case"double":S[v>>>3>>>0]=y;break;case"*":R[v>>>2>>>0]=y;break;default:Vt(`invalid type for setValue: ${U}`)}}class J{constructor(y){this.excPtr=y,this.ptr=y-24}set_type(y){R[this.ptr+4>>>2>>>0]=y}get_type(){return R[this.ptr+4>>>2>>>0]}set_destructor(y){R[this.ptr+8>>>2>>>0]=y}get_destructor(){return R[this.ptr+8>>>2>>>0]}set_caught(y){y=y?1:0,I[this.ptr+12>>>0]=y}get_caught(){return I[this.ptr+12>>>0]!=0}set_rethrown(y){y=y?1:0,I[this.ptr+13>>>0]=y}get_rethrown(){return I[this.ptr+13>>>0]!=0}init(y,U){this.set_adjusted_ptr(0),this.set_type(y),this.set_destructor(U)}set_adjusted_ptr(y){R[this.ptr+16>>>2>>>0]=y}get_adjusted_ptr(){return R[this.ptr+16>>>2>>>0]}get_exception_ptr(){var y=So(this.get_type());if(y)return R[this.excPtr>>>2>>>0];var U=this.get_adjusted_ptr();return U!==0?U:this.excPtr}}var j=0;function et(v,y,U){v>>>=0,y>>>=0,U>>>=0;var B=new J(v);throw B.init(y,U),j=v,j}var Pt=()=>{Vt("")},xt={},Dt=v=>{for(;v.length;){var y=v.pop(),U=v.pop();U(y)}};function te(v){return this.fromWireType(R[v>>>2>>>0])}var St={},It={},Ot={},$t,Bt=v=>{throw new $t(v)},Yt=(v,y,U)=>{v.forEach(function(mt){Ot[mt]=y});function B(mt){var Et=U(mt);Et.length!==v.length&&Bt("Mismatched type converter count");for(var wt=0;wt<v.length;++wt)qt(v[wt],Et[wt])}var rt=new Array(y.length),ft=[],yt=0;y.forEach((mt,Et)=>{It.hasOwnProperty(mt)?rt[Et]=It[mt]:(ft.push(mt),St.hasOwnProperty(mt)||(St[mt]=[]),St[mt].push(()=>{rt[Et]=It[mt],++yt,yt===ft.length&&B(rt)}))}),ft.length===0&&B(rt)},ee=function(v){v>>>=0;var y=xt[v];delete xt[v];var U=y.rawConstructor,B=y.rawDestructor,rt=y.fields,ft=rt.map(yt=>yt.getterReturnType).concat(rt.map(yt=>yt.setterArgumentType));Yt([v],ft,yt=>{var mt={};return rt.forEach((Et,wt)=>{var Nt=Et.fieldName,ne=yt[wt],pe=Et.getter,Le=Et.getterContext,Ae=yt[wt+rt.length],hn=Et.setter,dn=Et.setterContext;mt[Nt]={read:G=>ne.fromWireType(pe(Le,G)),write:(G,lt)=>{var gt=[];hn(dn,G,Ae.toWireType(gt,lt)),Dt(gt)}}}),[{name:y.name,fromWireType:Et=>{var wt={};for(var Nt in mt)wt[Nt]=mt[Nt].read(Et);return B(Et),wt},toWireType:(Et,wt)=>{for(var Nt in mt)if(!(Nt in wt))throw new TypeError(`Missing field: "${Nt}"`);var ne=U();for(Nt in mt)mt[Nt].write(ne,wt[Nt]);return Et!==null&&Et.push(B,ne),ne},argPackAdvance:de,readValueFromPointer:te,destructorFunction:B}]})};function ge(v,y,U,B,rt){}var $=()=>{for(var v=new Array(256),y=0;y<256;++y)v[y]=String.fromCharCode(y);Ut=v},Ut,dt=v=>{for(var y="",U=v;O[U>>>0];)y+=Ut[O[U++>>>0]];return y},_t,bt=v=>{throw new _t(v)};function zt(v,y,U={}){var B=y.name;if(v||bt(`type "${B}" must have a positive integer typeid pointer`),It.hasOwnProperty(v)){if(U.ignoreDuplicateRegistrations)return;bt(`Cannot register type '${B}' twice`)}if(It[v]=y,delete Ot[v],St.hasOwnProperty(v)){var rt=St[v];delete St[v],rt.forEach(ft=>ft())}}function qt(v,y,U={}){if(!("argPackAdvance"in y))throw new TypeError("registerType registeredInstance requires argPackAdvance");return zt(v,y,U)}var de=8;function Oe(v,y,U,B){v>>>=0,y>>>=0,y=dt(y),qt(v,{name:y,fromWireType:function(rt){return!!rt},toWireType:function(rt,ft){return ft?U:B},argPackAdvance:de,readValueFromPointer:function(rt){return this.fromWireType(O[rt>>>0])},destructorFunction:null})}var _e=v=>({count:v.count,deleteScheduled:v.deleteScheduled,preservePointerOnDelete:v.preservePointerOnDelete,ptr:v.ptr,ptrType:v.ptrType,smartPtr:v.smartPtr,smartPtrType:v.smartPtrType}),je=v=>{function y(U){return U.$$.ptrType.registeredClass.name}bt(y(v)+" instance already deleted")},tn=!1,ar=v=>{},Tr=v=>{v.smartPtr?v.smartPtrType.rawDestructor(v.smartPtr):v.ptrType.registeredClass.rawDestructor(v.ptr)},xn=v=>{v.count.value-=1;var y=v.count.value===0;y&&Tr(v)},wi=(v,y,U)=>{if(y===U)return v;if(U.baseClass===void 0)return null;var B=wi(v,y,U.baseClass);return B===null?null:U.downcast(B)},or={},Ar=()=>Object.keys(ri).length,Ti=()=>{var v=[];for(var y in ri)ri.hasOwnProperty(y)&&v.push(ri[y]);return v},Hn=[],Gn=()=>{for(;Hn.length;){var v=Hn.pop();v.$$.deleteScheduled=!1,v.delete()}},Wn,Cr=v=>{Wn=v,Hn.length&&Wn&&Wn(Gn)},gs=()=>{n.getInheritedInstanceCount=Ar,n.getLiveInheritedInstances=Ti,n.flushPendingDeletes=Gn,n.setDelayFunction=Cr},ri={},vs=(v,y)=>{for(y===void 0&&bt("ptr should not be undefined");v.baseClass;)y=v.upcast(y),v=v.baseClass;return y},xs=(v,y)=>(y=vs(v,y),ri[y]),Ai=(v,y)=>{(!y.ptrType||!y.ptr)&&Bt("makeClassHandle requires ptr and ptrType");var U=!!y.smartPtrType,B=!!y.smartPtr;return U!==B&&Bt("Both smartPtrType and smartPtr must be specified"),y.count={value:1},P(Object.create(v,{$$:{value:y,writable:!0}}))};function ys(v){var y=this.getPointee(v);if(!y)return this.destructor(v),null;var U=xs(this.registeredClass,y);if(U!==void 0){if(U.$$.count.value===0)return U.$$.ptr=y,U.$$.smartPtr=v,U.clone();var B=U.clone();return this.destructor(v),B}function rt(){return this.isSmartPointer?Ai(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:y,smartPtrType:this,smartPtr:v}):Ai(this.registeredClass.instancePrototype,{ptrType:this,ptr:v})}var ft=this.registeredClass.getActualType(y),yt=or[ft];if(!yt)return rt.call(this);var mt;this.isConst?mt=yt.constPointerType:mt=yt.pointerType;var Et=wi(y,this.registeredClass,mt.registeredClass);return Et===null?rt.call(this):this.isSmartPointer?Ai(mt.registeredClass.instancePrototype,{ptrType:mt,ptr:Et,smartPtrType:this,smartPtr:v}):Ai(mt.registeredClass.instancePrototype,{ptrType:mt,ptr:Et})}var P=v=>typeof FinalizationRegistry>"u"?(P=y=>y,v):(tn=new FinalizationRegistry(y=>{xn(y.$$)}),P=y=>{var U=y.$$,B=!!U.smartPtr;if(B){var rt={$$:U};tn.register(y,rt,y)}return y},ar=y=>tn.unregister(y),P(v)),K=()=>{Object.assign(ut.prototype,{isAliasOf(v){if(!(this instanceof ut)||!(v instanceof ut))return!1;var y=this.$$.ptrType.registeredClass,U=this.$$.ptr;v.$$=v.$$;for(var B=v.$$.ptrType.registeredClass,rt=v.$$.ptr;y.baseClass;)U=y.upcast(U),y=y.baseClass;for(;B.baseClass;)rt=B.upcast(rt),B=B.baseClass;return y===B&&U===rt},clone(){if(this.$$.ptr||je(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var v=P(Object.create(Object.getPrototypeOf(this),{$$:{value:_e(this.$$)}}));return v.$$.count.value+=1,v.$$.deleteScheduled=!1,v},delete(){this.$$.ptr||je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&bt("Object already scheduled for deletion"),ar(this),xn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||je(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&bt("Object already scheduled for deletion"),Hn.push(this),Hn.length===1&&Wn&&Wn(Gn),this.$$.deleteScheduled=!0,this}})};function ut(){}var ht=(v,y)=>Object.defineProperty(y,"name",{value:v}),Q=(v,y,U)=>{if(v[y].overloadTable===void 0){var B=v[y];v[y]=function(...rt){return v[y].overloadTable.hasOwnProperty(rt.length)||bt(`Function '${U}' called with an invalid number of arguments (${rt.length}) - expects one of (${v[y].overloadTable})!`),v[y].overloadTable[rt.length].apply(this,rt)},v[y].overloadTable=[],v[y].overloadTable[B.argCount]=B}},Mt=(v,y,U)=>{n.hasOwnProperty(v)?((U===void 0||n[v].overloadTable!==void 0&&n[v].overloadTable[U]!==void 0)&&bt(`Cannot register public name '${v}' twice`),Q(n,v,v),n.hasOwnProperty(U)&&bt(`Cannot register multiple overloads of a function with the same number of arguments (${U})!`),n[v].overloadTable[U]=y):(n[v]=y,U!==void 0&&(n[v].numArguments=U))},kt=48,Gt=57,Wt=v=>{if(v===void 0)return"_unknown";v=v.replace(/[^a-zA-Z0-9_]/g,"$");var y=v.charCodeAt(0);return y>=kt&&y<=Gt?`_${v}`:v};function Jt(v,y,U,B,rt,ft,yt,mt){this.name=v,this.constructor=y,this.instancePrototype=U,this.rawDestructor=B,this.baseClass=rt,this.getActualType=ft,this.upcast=yt,this.downcast=mt,this.pureVirtualFunctions=[]}var Kt=(v,y,U)=>{for(;y!==U;)y.upcast||bt(`Expected null or instance of ${U.name}, got an instance of ${y.name}`),v=y.upcast(v),y=y.baseClass;return v};function Xt(v,y){if(y===null)return this.isReference&&bt(`null is not a valid ${this.name}`),0;y.$$||bt(`Cannot pass "${Ms(y)}" as a ${this.name}`),y.$$.ptr||bt(`Cannot pass deleted object as a pointer of type ${this.name}`);var U=y.$$.ptrType.registeredClass,B=Kt(y.$$.ptr,U,this.registeredClass);return B}function ce(v,y){var U;if(y===null)return this.isReference&&bt(`null is not a valid ${this.name}`),this.isSmartPointer?(U=this.rawConstructor(),v!==null&&v.push(this.rawDestructor,U),U):0;(!y||!y.$$)&&bt(`Cannot pass "${Ms(y)}" as a ${this.name}`),y.$$.ptr||bt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&y.$$.ptrType.isConst&&bt(`Cannot convert argument of type ${y.$$.smartPtrType?y.$$.smartPtrType.name:y.$$.ptrType.name} to parameter type ${this.name}`);var B=y.$$.ptrType.registeredClass;if(U=Kt(y.$$.ptr,B,this.registeredClass),this.isSmartPointer)switch(y.$$.smartPtr===void 0&&bt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:y.$$.smartPtrType===this?U=y.$$.smartPtr:bt(`Cannot convert argument of type ${y.$$.smartPtrType?y.$$.smartPtrType.name:y.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:U=y.$$.smartPtr;break;case 2:if(y.$$.smartPtrType===this)U=y.$$.smartPtr;else{var rt=y.clone();U=this.rawShare(U,Be.toHandle(()=>rt.delete())),v!==null&&v.push(this.rawDestructor,U)}break;default:bt("Unsupporting sharing policy")}return U}function fe(v,y){if(y===null)return this.isReference&&bt(`null is not a valid ${this.name}`),0;y.$$||bt(`Cannot pass "${Ms(y)}" as a ${this.name}`),y.$$.ptr||bt(`Cannot pass deleted object as a pointer of type ${this.name}`),y.$$.ptrType.isConst&&bt(`Cannot convert argument of type ${y.$$.ptrType.name} to parameter type ${this.name}`);var U=y.$$.ptrType.registeredClass,B=Kt(y.$$.ptr,U,this.registeredClass);return B}var Te=()=>{Object.assign(be.prototype,{getPointee(v){return this.rawGetPointee&&(v=this.rawGetPointee(v)),v},destructor(v){this.rawDestructor?.(v)},argPackAdvance:de,readValueFromPointer:te,fromWireType:ys})};function be(v,y,U,B,rt,ft,yt,mt,Et,wt,Nt){this.name=v,this.registeredClass=y,this.isReference=U,this.isConst=B,this.isSmartPointer=rt,this.pointeeType=ft,this.sharingPolicy=yt,this.rawGetPointee=mt,this.rawConstructor=Et,this.rawShare=wt,this.rawDestructor=Nt,!rt&&y.baseClass===void 0?B?(this.toWireType=Xt,this.destructorFunction=null):(this.toWireType=fe,this.destructorFunction=null):this.toWireType=ce}var ue=(v,y,U)=>{n.hasOwnProperty(v)||Bt("Replacing nonexistent public symbol"),n[v].overloadTable!==void 0&&U!==void 0?n[v].overloadTable[U]=y:(n[v]=y,n[v].argCount=U)},jt=(v,y,U)=>{v=v.replace(/p/g,"i");var B=n["dynCall_"+v];return B(y,...U)},we,he=v=>we.get(v),en=(v,y,U=[])=>{if(v.includes("j"))return jt(v,y,U);var B=he(y)(...U);return v[0]=="p"?B>>>0:B},Tn=(v,y)=>(...U)=>en(v,y,U),Me=(v,y)=>{v=dt(v);function U(){return v.includes("j")||v.includes("p")?Tn(v,y):he(y)}var B=U();return typeof B!="function"&&bt(`unknown function pointer with signature ${v}: ${y}`),B},si=(v,y)=>{var U=ht(y,function(B){this.name=y,this.message=B;var rt=new Error(B).stack;rt!==void 0&&(this.stack=this.toString()+`
`+rt.replace(/^Error(:[^\n]*)?\n/,""))});return U.prototype=Object.create(v.prototype),U.prototype.constructor=U,U.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},U},Se,Ye=v=>{var y=bo(v),U=dt(y);return Cn(y),U},He=(v,y)=>{var U=[],B={};function rt(ft){if(!B[ft]&&!It[ft]){if(Ot[ft]){Ot[ft].forEach(rt);return}U.push(ft),B[ft]=!0}}throw y.forEach(rt),new Se(`${v}: `+U.map(Ye).join([", "]))};function Ge(v,y,U,B,rt,ft,yt,mt,Et,wt,Nt,ne,pe){v>>>=0,y>>>=0,U>>>=0,B>>>=0,rt>>>=0,ft>>>=0,yt>>>=0,mt>>>=0,Et>>>=0,wt>>>=0,Nt>>>=0,ne>>>=0,pe>>>=0,Nt=dt(Nt),ft=Me(rt,ft),mt&&=Me(yt,mt),wt&&=Me(Et,wt),pe=Me(ne,pe);var Le=Wt(Nt);Mt(Le,function(){He(`Cannot construct ${Nt} due to unbound types`,[B])}),Yt([v,y,U],B?[B]:[],Ae=>{Ae=Ae[0];var hn,dn;B?(hn=Ae.registeredClass,dn=hn.instancePrototype):dn=ut.prototype;var G=ht(Nt,function(...Pe){if(Object.getPrototypeOf(this)!==lt)throw new _t("Use 'new' to construct "+Nt);if(gt.constructor_body===void 0)throw new _t(Nt+" has no accessible constructor");var nn=gt.constructor_body[Pe.length];if(nn===void 0)throw new _t(`Tried to invoke ctor of ${Nt} with invalid number of parameters (${Pe.length}) - expected (${Object.keys(gt.constructor_body).toString()}) parameters instead!`);return nn.apply(this,Pe)}),lt=Object.create(dn,{constructor:{value:G}});G.prototype=lt;var gt=new Jt(Nt,G,lt,pe,hn,ft,mt,wt);gt.baseClass&&(gt.baseClass.__derivedClasses??=[],gt.baseClass.__derivedClasses.push(gt));var Tt=new be(Nt,gt,!0,!1,!1),ie=new be(Nt+"*",gt,!1,!1,!1),Ee=new be(Nt+" const*",gt,!1,!0,!1);return or[v]={pointerType:ie,constPointerType:Ee},ue(Le,G),[Tt,ie,Ee]})}var ke=(v,y)=>{for(var U=[],B=0;B<v;B++)U.push(R[y+B*4>>>2>>>0]);return U};function Ci(v){for(var y=1;y<v.length;++y)if(v[y]!==null&&v[y].destructorFunction===void 0)return!0;return!1}function yn(v,y){if(!(v instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof v} which is not a function`);var U=ht(v.name||"unknownFunctionName",function(){});U.prototype=v.prototype;var B=new U,rt=v.apply(B,y);return rt instanceof Object?rt:B}function wc(v,y,U,B){for(var rt=Ci(v),ft=v.length,yt="",mt="",Et=0;Et<ft-2;++Et)yt+=(Et!==0?", ":"")+"arg"+Et,mt+=(Et!==0?", ":"")+"arg"+Et+"Wired";var wt=`
        return function (${yt}) {
        if (arguments.length !== ${ft-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${ft-2}');
        }`;rt&&(wt+=`var destructors = [];
`);var Nt=rt?"destructors":"null",ne=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];y&&(wt+="var thisWired = classParam['toWireType']("+Nt+`, this);
`);for(var Et=0;Et<ft-2;++Et)wt+="var arg"+Et+"Wired = argType"+Et+"['toWireType']("+Nt+", arg"+Et+`);
`,ne.push("argType"+Et);if(y&&(mt="thisWired"+(mt.length>0?", ":"")+mt),wt+=(U||B?"var rv = ":"")+"invoker(fn"+(mt.length>0?", ":"")+mt+`);
`,rt)wt+=`runDestructors(destructors);
`;else for(var Et=y?1:2;Et<v.length;++Et){var pe=Et===1?"thisWired":"arg"+(Et-2)+"Wired";v[Et].destructorFunction!==null&&(wt+=`${pe}_dtor(${pe});
`,ne.push(`${pe}_dtor`))}return U&&(wt+=`var ret = retType['fromWireType'](rv);
return ret;
`),wt+=`}
`,[ne,wt]}function bs(v,y,U,B,rt,ft){var yt=y.length;yt<2&&bt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var mt=y[1]!==null&&U!==null,Et=Ci(y),wt=y[0].name!=="void",Nt=[v,bt,B,rt,Dt,y[0],y[1]],ne=0;ne<yt-2;++ne)Nt.push(y[ne+2]);if(!Et)for(var ne=mt?1:2;ne<y.length;++ne)y[ne].destructorFunction!==null&&Nt.push(y[ne].destructorFunction);let[pe,Le]=wc(y,mt,wt,ft);pe.push(Le);var Ae=yn(Function,pe)(...Nt);return ht(v,Ae)}var Tc=function(v,y,U,B,rt,ft){v>>>=0,U>>>=0,B>>>=0,rt>>>=0,ft>>>=0;var yt=ke(y,U);rt=Me(B,rt),Yt([],[v],mt=>{mt=mt[0];var Et=`constructor ${mt.name}`;if(mt.registeredClass.constructor_body===void 0&&(mt.registeredClass.constructor_body=[]),mt.registeredClass.constructor_body[y-1]!==void 0)throw new _t(`Cannot register multiple constructors with identical number of parameters (${y-1}) for class '${mt.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return mt.registeredClass.constructor_body[y-1]=()=>{He(`Cannot construct ${mt.name} due to unbound types`,yt)},Yt([],yt,wt=>(wt.splice(1,0,null),mt.registeredClass.constructor_body[y-1]=bs(Et,wt,null,rt,ft),[])),[]})},po=v=>{v=v.trim();const y=v.indexOf("(");return y!==-1?v.substr(0,y):v},Ac=function(v,y,U,B,rt,ft,yt,mt,Et){v>>>=0,y>>>=0,B>>>=0,rt>>>=0,ft>>>=0,yt>>>=0;var wt=ke(U,B);y=dt(y),y=po(y),ft=Me(rt,ft),Yt([],[v],Nt=>{Nt=Nt[0];var ne=`${Nt.name}.${y}`;y.startsWith("@@")&&(y=Symbol[y.substring(2)]),mt&&Nt.registeredClass.pureVirtualFunctions.push(y);function pe(){He(`Cannot call ${ne} due to unbound types`,wt)}var Le=Nt.registeredClass.instancePrototype,Ae=Le[y];return Ae===void 0||Ae.overloadTable===void 0&&Ae.className!==Nt.name&&Ae.argCount===U-2?(pe.argCount=U-2,pe.className=Nt.name,Le[y]=pe):(Q(Le,y,ne),Le[y].overloadTable[U-2]=pe),Yt([],wt,hn=>{var dn=bs(ne,hn,Nt,ft,yt,Et);return Le[y].overloadTable===void 0?(dn.argCount=U-2,Le[y]=dn):Le[y].overloadTable[U-2]=dn,[]}),[]})},Ss=[],An=[];function Es(v){v>>>=0,v>9&&--An[v+1]===0&&(An[v]=void 0,Ss.push(v))}var Cc=()=>An.length/2-5-Ss.length,Rc=()=>{An.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=Cc},Be={toValue:v=>(v||bt("Cannot use deleted val. handle = "+v),An[v]),toHandle:v=>{switch(v){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const y=Ss.pop()||An.length;return An[y]=v,An[y+1]=1,y}}}},Pc={name:"emscripten::val",fromWireType:v=>{var y=Be.toValue(v);return Es(v),y},toWireType:(v,y)=>Be.toHandle(y),argPackAdvance:de,readValueFromPointer:te,destructorFunction:null};function mo(v){return v>>>=0,qt(v,Pc)}var Dc=(v,y,U)=>{switch(y){case 1:return U?function(B){return this.fromWireType(I[B>>>0])}:function(B){return this.fromWireType(O[B>>>0])};case 2:return U?function(B){return this.fromWireType(T[B>>>1>>>0])}:function(B){return this.fromWireType(A[B>>>1>>>0])};case 4:return U?function(B){return this.fromWireType(V[B>>>2>>>0])}:function(B){return this.fromWireType(R[B>>>2>>>0])};default:throw new TypeError(`invalid integer width (${y}): ${v}`)}};function Lc(v,y,U,B){v>>>=0,y>>>=0,U>>>=0,y=dt(y);function rt(){}rt.values={},qt(v,{name:y,constructor:rt,fromWireType:function(ft){return this.constructor.values[ft]},toWireType:(ft,yt)=>yt.value,argPackAdvance:de,readValueFromPointer:Dc(y,U,B),destructorFunction:null}),Mt(y,rt)}var Rr=(v,y)=>{var U=It[v];return U===void 0&&bt(`${y} has unknown type ${Ye(v)}`),U};function Ic(v,y,U){v>>>=0,y>>>=0;var B=Rr(v,"enum");y=dt(y);var rt=B.constructor,ft=Object.create(B.constructor.prototype,{value:{value:U},constructor:{value:ht(`${B.name}_${y}`,function(){})}});rt.values[U]=ft,rt[y]=ft}var Ms=v=>{if(v===null)return"null";var y=typeof v;return y==="object"||y==="array"||y==="function"?v.toString():""+v},Uc=(v,y)=>{switch(y){case 4:return function(U){return this.fromWireType(k[U>>>2>>>0])};case 8:return function(U){return this.fromWireType(S[U>>>3>>>0])};default:throw new TypeError(`invalid float width (${y}): ${v}`)}},Nc=function(v,y,U){v>>>=0,y>>>=0,U>>>=0,y=dt(y),qt(v,{name:y,fromWireType:B=>B,toWireType:(B,rt)=>rt,argPackAdvance:de,readValueFromPointer:Uc(y,U),destructorFunction:null})};function Fc(v,y,U,B,rt,ft,yt){v>>>=0,U>>>=0,B>>>=0,rt>>>=0,ft>>>=0;var mt=ke(y,U);v=dt(v),v=po(v),rt=Me(B,rt),Mt(v,function(){He(`Cannot call ${v} due to unbound types`,mt)},y-1),Yt([],mt,Et=>{var wt=[Et[0],null].concat(Et.slice(1));return ue(v,bs(v,wt,null,rt,ft,yt),y-1),[]})}var Oc=(v,y,U)=>{switch(y){case 1:return U?B=>I[B>>>0]:B=>O[B>>>0];case 2:return U?B=>T[B>>>1>>>0]:B=>A[B>>>1>>>0];case 4:return U?B=>V[B>>>2>>>0]:B=>R[B>>>2>>>0];default:throw new TypeError(`invalid integer width (${y}): ${v}`)}};function kc(v,y,U,B,rt){v>>>=0,y>>>=0,U>>>=0,y=dt(y);var ft=Nt=>Nt;if(B===0){var yt=32-8*U;ft=Nt=>Nt<<yt>>>yt}var mt=y.includes("unsigned"),Et=(Nt,ne)=>{},wt;mt?wt=function(Nt,ne){return Et(ne,this.name),ne>>>0}:wt=function(Nt,ne){return Et(ne,this.name),ne},qt(v,{name:y,fromWireType:ft,toWireType:wt,argPackAdvance:de,readValueFromPointer:Oc(y,U,B!==0),destructorFunction:null})}function Bc(v,y,U){v>>>=0,U>>>=0;var B=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],rt=B[y];function ft(yt){var mt=R[yt>>>2>>>0],Et=R[yt+4>>>2>>>0];return new rt(I.buffer,Et,mt)}U=dt(U),qt(v,{name:U,fromWireType:ft,argPackAdvance:de,readValueFromPointer:ft},{ignoreDuplicateRegistrations:!0})}function zc(v,y){v>>>=0,mo(v)}var Vc=(v,y,U,B)=>{if(U>>>=0,!(B>0))return 0;for(var rt=U,ft=U+B-1,yt=0;yt<v.length;++yt){var mt=v.charCodeAt(yt);if(mt>=55296&&mt<=57343){var Et=v.charCodeAt(++yt);mt=65536+((mt&1023)<<10)|Et&1023}if(mt<=127){if(U>=ft)break;y[U++>>>0]=mt}else if(mt<=2047){if(U+1>=ft)break;y[U++>>>0]=192|mt>>6,y[U++>>>0]=128|mt&63}else if(mt<=65535){if(U+2>=ft)break;y[U++>>>0]=224|mt>>12,y[U++>>>0]=128|mt>>6&63,y[U++>>>0]=128|mt&63}else{if(U+3>=ft)break;y[U++>>>0]=240|mt>>18,y[U++>>>0]=128|mt>>12&63,y[U++>>>0]=128|mt>>6&63,y[U++>>>0]=128|mt&63}}return y[U>>>0]=0,U-rt},Hc=(v,y,U)=>Vc(v,O,y,U),Gc=v=>{for(var y=0,U=0;U<v.length;++U){var B=v.charCodeAt(U);B<=127?y++:B<=2047?y+=2:B>=55296&&B<=57343?(y+=4,++U):y+=3}return y},_o=typeof TextDecoder<"u"?new TextDecoder:void 0,Wc=(v,y,U)=>{y>>>=0;for(var B=y+U,rt=y;v[rt]&&!(rt>=B);)++rt;if(rt-y>16&&v.buffer&&_o)return _o.decode(v.subarray(y,rt));for(var ft="";y<rt;){var yt=v[y++];if(!(yt&128)){ft+=String.fromCharCode(yt);continue}var mt=v[y++]&63;if((yt&224)==192){ft+=String.fromCharCode((yt&31)<<6|mt);continue}var Et=v[y++]&63;if((yt&240)==224?yt=(yt&15)<<12|mt<<6|Et:yt=(yt&7)<<18|mt<<12|Et<<6|v[y++]&63,yt<65536)ft+=String.fromCharCode(yt);else{var wt=yt-65536;ft+=String.fromCharCode(55296|wt>>10,56320|wt&1023)}}return ft},Xc=(v,y)=>(v>>>=0,v?Wc(O,v,y):"");function $c(v,y){v>>>=0,y>>>=0,y=dt(y);var U=y==="std::string";qt(v,{name:y,fromWireType(B){var rt=R[B>>>2>>>0],ft=B+4,yt;if(U)for(var mt=ft,Et=0;Et<=rt;++Et){var wt=ft+Et;if(Et==rt||O[wt>>>0]==0){var Nt=wt-mt,ne=Xc(mt,Nt);yt===void 0?yt=ne:(yt+="\0",yt+=ne),mt=wt+1}}else{for(var pe=new Array(rt),Et=0;Et<rt;++Et)pe[Et]=String.fromCharCode(O[ft+Et>>>0]);yt=pe.join("")}return Cn(B),yt},toWireType(B,rt){rt instanceof ArrayBuffer&&(rt=new Uint8Array(rt));var ft,yt=typeof rt=="string";yt||rt instanceof Uint8Array||rt instanceof Uint8ClampedArray||rt instanceof Int8Array||bt("Cannot pass non-string to std::string"),U&&yt?ft=Gc(rt):ft=rt.length;var mt=Cs(4+ft+1),Et=mt+4;if(R[mt>>>2>>>0]=ft,U&&yt)Hc(rt,Et,ft+1);else if(yt)for(var wt=0;wt<ft;++wt){var Nt=rt.charCodeAt(wt);Nt>255&&(Cn(Et),bt("String has UTF-16 code units that do not fit in 8 bits")),O[Et+wt>>>0]=Nt}else for(var wt=0;wt<ft;++wt)O[Et+wt>>>0]=rt[wt];return B!==null&&B.push(Cn,mt),mt},argPackAdvance:de,readValueFromPointer:te,destructorFunction(B){Cn(B)}})}var go=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,jc=(v,y)=>{for(var U=v,B=U>>1,rt=B+y/2;!(B>=rt)&&A[B>>>0];)++B;if(U=B<<1,U-v>32&&go)return go.decode(O.subarray(v>>>0,U>>>0));for(var ft="",yt=0;!(yt>=y/2);++yt){var mt=T[v+yt*2>>>1>>>0];if(mt==0)break;ft+=String.fromCharCode(mt)}return ft},Yc=(v,y,U)=>{if(U??=2147483647,U<2)return 0;U-=2;for(var B=y,rt=U<v.length*2?U/2:v.length,ft=0;ft<rt;++ft){var yt=v.charCodeAt(ft);T[y>>>1>>>0]=yt,y+=2}return T[y>>>1>>>0]=0,y-B},qc=v=>v.length*2,Zc=(v,y)=>{for(var U=0,B="";!(U>=y/4);){var rt=V[v+U*4>>>2>>>0];if(rt==0)break;if(++U,rt>=65536){var ft=rt-65536;B+=String.fromCharCode(55296|ft>>10,56320|ft&1023)}else B+=String.fromCharCode(rt)}return B},Kc=(v,y,U)=>{if(y>>>=0,U??=2147483647,U<4)return 0;for(var B=y,rt=B+U-4,ft=0;ft<v.length;++ft){var yt=v.charCodeAt(ft);if(yt>=55296&&yt<=57343){var mt=v.charCodeAt(++ft);yt=65536+((yt&1023)<<10)|mt&1023}if(V[y>>>2>>>0]=yt,y+=4,y+4>rt)break}return V[y>>>2>>>0]=0,y-B},Jc=v=>{for(var y=0,U=0;U<v.length;++U){var B=v.charCodeAt(U);B>=55296&&B<=57343&&++U,y+=4}return y},Qc=function(v,y,U){v>>>=0,y>>>=0,U>>>=0,U=dt(U);var B,rt,ft,yt;y===2?(B=jc,rt=Yc,yt=qc,ft=mt=>A[mt>>>1>>>0]):y===4&&(B=Zc,rt=Kc,yt=Jc,ft=mt=>R[mt>>>2>>>0]),qt(v,{name:U,fromWireType:mt=>{for(var Et=R[mt>>>2>>>0],wt,Nt=mt+4,ne=0;ne<=Et;++ne){var pe=mt+4+ne*y;if(ne==Et||ft(pe)==0){var Le=pe-Nt,Ae=B(Nt,Le);wt===void 0?wt=Ae:(wt+="\0",wt+=Ae),Nt=pe+y}}return Cn(mt),wt},toWireType:(mt,Et)=>{typeof Et!="string"&&bt(`Cannot pass non-string to C++ string type ${U}`);var wt=yt(Et),Nt=Cs(4+wt+y);return R[Nt>>>2>>>0]=wt/y,rt(Et,Nt+4,wt+y),mt!==null&&mt.push(Cn,Nt),Nt},argPackAdvance:de,readValueFromPointer:te,destructorFunction(mt){Cn(mt)}})};function tu(v,y,U,B,rt,ft){v>>>=0,y>>>=0,U>>>=0,B>>>=0,rt>>>=0,ft>>>=0,xt[v]={name:dt(y),rawConstructor:Me(U,B),rawDestructor:Me(rt,ft),fields:[]}}function eu(v,y,U,B,rt,ft,yt,mt,Et,wt){v>>>=0,y>>>=0,U>>>=0,B>>>=0,rt>>>=0,ft>>>=0,yt>>>=0,mt>>>=0,Et>>>=0,wt>>>=0,xt[v].fields.push({fieldName:dt(y),getterReturnType:U,getter:Me(B,rt),getterContext:ft,setterArgumentType:yt,setter:Me(mt,Et),setterContext:wt})}var nu=function(v,y){v>>>=0,y>>>=0,y=dt(y),qt(v,{isVoid:!0,name:y,argPackAdvance:0,fromWireType:()=>{},toWireType:(U,B)=>{}})};function iu(v,y,U){return v>>>=0,y>>>=0,U>>>=0,O.copyWithin(v>>>0,y>>>0,y+U>>>0)}var vo=(v,y,U)=>{var B=[],rt=v.toWireType(B,U);return B.length&&(R[y>>>2>>>0]=Be.toHandle(B)),rt};function ru(v,y,U){return v>>>=0,y>>>=0,U>>>=0,v=Be.toValue(v),y=Rr(y,"emval::as"),vo(y,U,v)}var su={},xo=v=>{var y=su[v];return y===void 0?dt(v):y},ws=[];function au(v,y,U,B,rt){return v>>>=0,y>>>=0,U>>>=0,B>>>=0,rt>>>=0,v=ws[v],y=Be.toValue(y),U=xo(U),v(y,y[U],B,rt)}function ou(v,y){return v>>>=0,y>>>=0,v=Be.toValue(v),y=Be.toValue(y),v==y}var lu=v=>{var y=ws.length;return ws.push(v),y},cu=(v,y)=>{for(var U=new Array(v),B=0;B<v;++B)U[B]=Rr(R[y+B*4>>>2>>>0],"parameter "+B);return U};function uu(v,y,U){y>>>=0;var B=cu(v,y),rt=B.shift();v--;var ft=`return function (obj, func, destructorsRef, args) {
`,yt=0,mt=[];U===0&&mt.push("obj");for(var Et=["retType"],wt=[rt],Nt=0;Nt<v;++Nt)mt.push("arg"+Nt),Et.push("argType"+Nt),wt.push(B[Nt]),ft+=`  var arg${Nt} = argType${Nt}.readValueFromPointer(args${yt?"+"+yt:""});
`,yt+=B[Nt].argPackAdvance;var ne=U===1?"new func":"func.call";ft+=`  var rv = ${ne}(${mt.join(", ")});
`,rt.isVoid||(Et.push("emval_returnValue"),wt.push(vo),ft+=`  return emval_returnValue(retType, destructorsRef, rv);
`),ft+=`};
`,Et.push(ft);var pe=yn(Function,Et)(...wt),Le=`methodCaller<(${B.map(Ae=>Ae.name).join(", ")}) => ${rt.name}>`;return lu(ht(Le,pe))}function hu(v,y){return v>>>=0,y>>>=0,v=Be.toValue(v),y=Be.toValue(y),Be.toHandle(v[y])}function du(v){v>>>=0,v>9&&(An[v+1]+=1)}function fu(v){return v>>>=0,Be.toHandle(xo(v))}function pu(){return Be.toHandle({})}function mu(v){v>>>=0;var y=Be.toValue(v);Dt(y),Es(v)}function _u(v,y,U){v>>>=0,y>>>=0,U>>>=0,v=Be.toValue(v),y=Be.toValue(y),U=Be.toValue(U),v[y]=U}function gu(v,y){v>>>=0,y>>>=0,v=Rr(v,"_emval_take_value");var U=v.readValueFromPointer(y);return Be.toHandle(U)}var vu=()=>4294901760,xu=v=>{var y=D.buffer,U=(v-y.byteLength+65535)/65536;try{return D.grow(U),H(),1}catch{}};function yu(v){v>>>=0;var y=O.length,U=vu();if(v>U)return!1;for(var B=(Et,wt)=>Et+(wt-Et%wt)%wt,rt=1;rt<=4;rt*=2){var ft=y*(1+.2/rt);ft=Math.min(ft,v+100663296);var yt=Math.min(U,B(Math.max(v,ft),65536)),mt=xu(yt);if(mt)return!0}return!1}var yo=(v,y)=>{v<128?y.push(v):y.push(v%128|128,v>>7)},bu=v=>{for(var y={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},U={parameters:[],results:v[0]=="v"?[]:[y[v[0]]]},B=1;B<v.length;++B)U.parameters.push(y[v[B]]);return U},Su=(v,y)=>{var U=v.slice(0,1),B=v.slice(1),rt={i:127,p:127,j:126,f:125,d:124,e:111};y.push(96),yo(B.length,y);for(var ft=0;ft<B.length;++ft)y.push(rt[B[ft]]);U=="v"?y.push(0):y.push(1,rt[U])},Eu=(v,y)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(bu(y),v);var U=[1];Su(y,U);var B=[0,97,115,109,1,0,0,0,1];yo(U.length,B),B.push(...U),B.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var rt=new WebAssembly.Module(new Uint8Array(B)),ft=new WebAssembly.Instance(rt,{e:{f:v}}),yt=ft.exports.f;return yt},Mu=(v,y)=>{if(ai)for(var U=v;U<v+y;U++){var B=he(U);B&&ai.set(B,U)}},ai,wu=v=>(ai||(ai=new WeakMap,Mu(0,we.length)),ai.get(v)||0),Ts=[],Tu=()=>{if(Ts.length)return Ts.pop();try{we.grow(1)}catch(v){throw v instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":v}return we.length-1},As=(v,y)=>we.set(v,y),lr=(v,y)=>{var U=wu(v);if(U)return U;var B=Tu();try{As(B,v)}catch(ft){if(!(ft instanceof TypeError))throw ft;var rt=Eu(v,y);As(B,rt)}return ai.set(v,B),B},cr=v=>{ai.delete(he(v)),As(v,null),Ts.push(v)};$t=n.InternalError=class extends Error{constructor(y){super(y),this.name="InternalError"}},$(),_t=n.BindingError=class extends Error{constructor(y){super(y),this.name="BindingError"}},K(),gs(),Te(),Se=n.UnboundTypeError=si(Error,"UnboundTypeError"),Rc();var Au={i:et,D:Pt,n:ee,C:ge,H:Oe,h:Ge,g:Tc,a:Ac,G:mo,t:Lc,e:Ic,x:Nc,c:Fc,j:kc,f:Bc,k:zc,w:$c,s:Qc,o:tu,l:eu,I:nu,F:iu,v:ru,z:au,b:Es,m:ou,y:uu,B:hu,u:du,q:fu,A:pu,p:mu,r:_u,d:gu,E:yu},un=ot(),bo=v=>(bo=un.L)(v),Cs=v=>(Cs=un.N)(v),Cn=v=>(Cn=un.O)(v),So=v=>(So=un.P)(v);function Cu(v){v=Object.assign({},v);var y=B=>rt=>B(rt)>>>0,U=B=>()=>B()>>>0;return v.L=y(v.L),v.N=y(v.N),v._emscripten_stack_alloc=y(v._emscripten_stack_alloc),v.emscripten_stack_get_current=U(v.emscripten_stack_get_current),v}n.addFunction=lr,n.removeFunction=cr;var Pr;Ct=function v(){Pr||Eo(),Pr||(Ct=v)};function Eo(){if(it>0||(st(),it>0))return;function v(){Pr||(Pr=!0,n.calledRun=!0,!N&&(vt(),r(n),n.onRuntimeInitialized?.(),X()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),v()},1)):v()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Eo(),e=a,e})})();function vg(i){return typeof i=="function"?i:Array.isArray(i)?t=>{for(const e of i)if(typeof e=="string"&&t===e||e instanceof RegExp&&e.test(t))return!0}:()=>!1}const xg=`
`;function yg(i,t){let e="";return t.format&&t.indentBy.length>0&&(e=xg),mc(i,t,"",e)}function mc(i,t,e,n){let r="",s=!1;for(let a=0;a<i.length;a++){const o=i[a],l=bg(o);if(l===void 0)continue;let u="";if(e.length===0?u=l:u=`${e}.${l}`,l===t.textNodeName){let x=o[l];Sg(u,t)||(x=t.tagValueProcessor(l,x),x=_c(x,t)),s&&(r+=n),r+=x,s=!1;continue}else if(l===t.cdataPropName){s&&(r+=n),r+=`<![CDATA[${o[l][0][t.textNodeName]}]]>`,s=!1;continue}else if(l===t.commentPropName){r+=n+`<!--${o[l][0][t.textNodeName]}-->`,s=!0;continue}else if(l[0]==="?"){const x=Tl(o[":@"],t),g=l==="?xml"?"":n;let f=o[l][0][t.textNodeName];f=f.length!==0?" "+f:"",r+=g+`<${l}${f}${x}?>`,s=!0;continue}let p=n;p!==""&&(p+=t.indentBy);const d=Tl(o[":@"],t),m=n+`<${l}${d}`,h=mc(o[l],t,u,p);t.unpairedTags.indexOf(l)!==-1?t.suppressUnpairedNode?r+=m+">":r+=m+"/>":(!h||h.length===0)&&t.suppressEmptyNode?r+=m+"/>":h&&h.endsWith(">")?r+=m+`>${h}${n}</${l}>`:(r+=m+">",h&&n!==""&&(h.includes("/>")||h.includes("</"))?r+=n+t.indentBy+h+n:r+=h,r+=`</${l}>`),s=!0}return r}function bg(i){const t=Object.keys(i);for(let e=0;e<t.length;e++){const n=t[e];if(i.hasOwnProperty(n)&&n!==":@")return n}}function Tl(i,t){let e="";if(i&&!t.ignoreAttributes)for(let n in i){if(!i.hasOwnProperty(n))continue;let r=t.attributeValueProcessor(n,i[n]);r=_c(r,t),r===!0&&t.suppressBooleanAttributes?e+=` ${n.substr(t.attributeNamePrefix.length)}`:e+=` ${n.substr(t.attributeNamePrefix.length)}="${r}"`}return e}function Sg(i,t){i=i.substr(0,i.length-t.textNodeName.length-1);let e=i.substr(i.lastIndexOf(".")+1);for(let n in t.stopNodes)if(t.stopNodes[n]===i||t.stopNodes[n]==="*."+e)return!0;return!1}function _c(i,t){if(i&&i.length>0&&t.processEntities)for(let e=0;e<t.entities.length;e++){const n=t.entities[e];i=i.replace(n.regex,n.val)}return i}const Eg={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(i,t){return t},attributeValueProcessor:function(i,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function Vn(i){this.options=Object.assign({},Eg,i),this.options.ignoreAttributes===!0||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.ignoreAttributesFn=vg(this.options.ignoreAttributes),this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Tg),this.processTextOrObjNode=Mg,this.options.format?(this.indentate=wg,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}Vn.prototype.build=function(i){return this.options.preserveOrder?yg(i,this.options):(Array.isArray(i)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(i={[this.options.arrayNodeName]:i}),this.j2x(i,0,[]).val)};Vn.prototype.j2x=function(i,t,e){let n="",r="";const s=e.join(".");for(let a in i)if(Object.prototype.hasOwnProperty.call(i,a))if(typeof i[a]>"u")this.isAttribute(a)&&(r+="");else if(i[a]===null)this.isAttribute(a)||a===this.options.cdataPropName?r+="":a[0]==="?"?r+=this.indentate(t)+"<"+a+"?"+this.tagEndChar:r+=this.indentate(t)+"<"+a+"/"+this.tagEndChar;else if(i[a]instanceof Date)r+=this.buildTextValNode(i[a],a,"",t);else if(typeof i[a]!="object"){const o=this.isAttribute(a);if(o&&!this.ignoreAttributesFn(o,s))n+=this.buildAttrPairStr(o,""+i[a]);else if(!o)if(a===this.options.textNodeName){let l=this.options.tagValueProcessor(a,""+i[a]);r+=this.replaceEntitiesValue(l)}else r+=this.buildTextValNode(i[a],a,"",t)}else if(Array.isArray(i[a])){const o=i[a].length;let l="",u="";for(let p=0;p<o;p++){const d=i[a][p];if(!(typeof d>"u"))if(d===null)a[0]==="?"?r+=this.indentate(t)+"<"+a+"?"+this.tagEndChar:r+=this.indentate(t)+"<"+a+"/"+this.tagEndChar;else if(typeof d=="object")if(this.options.oneListGroup){const m=this.j2x(d,t+1,e.concat(a));l+=m.val,this.options.attributesGroupName&&d.hasOwnProperty(this.options.attributesGroupName)&&(u+=m.attrStr)}else l+=this.processTextOrObjNode(d,a,t,e);else if(this.options.oneListGroup){let m=this.options.tagValueProcessor(a,d);m=this.replaceEntitiesValue(m),l+=m}else l+=this.buildTextValNode(d,a,"",t)}this.options.oneListGroup&&(l=this.buildObjectNode(l,a,u,t)),r+=l}else if(this.options.attributesGroupName&&a===this.options.attributesGroupName){const o=Object.keys(i[a]),l=o.length;for(let u=0;u<l;u++)n+=this.buildAttrPairStr(o[u],""+i[a][o[u]])}else r+=this.processTextOrObjNode(i[a],a,t,e);return{attrStr:n,val:r}};Vn.prototype.buildAttrPairStr=function(i,t){return t=this.options.attributeValueProcessor(i,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+i:" "+i+'="'+t+'"'};function Mg(i,t,e,n){const r=this.j2x(i,e+1,n.concat(t));return i[this.options.textNodeName]!==void 0&&Object.keys(i).length===1?this.buildTextValNode(i[this.options.textNodeName],t,r.attrStr,e):this.buildObjectNode(r.val,t,r.attrStr,e)}Vn.prototype.buildObjectNode=function(i,t,e,n){if(i==="")return t[0]==="?"?this.indentate(n)+"<"+t+e+"?"+this.tagEndChar:this.indentate(n)+"<"+t+e+this.closeTag(t)+this.tagEndChar;{let r="</"+t+this.tagEndChar,s="";return t[0]==="?"&&(s="?",r=""),(e||e==="")&&i.indexOf("<")===-1?this.indentate(n)+"<"+t+e+s+">"+i+r:this.options.commentPropName!==!1&&t===this.options.commentPropName&&s.length===0?this.indentate(n)+`<!--${i}-->`+this.newLine:this.indentate(n)+"<"+t+e+s+this.tagEndChar+i+this.indentate(n)+r}};Vn.prototype.closeTag=function(i){let t="";return this.options.unpairedTags.indexOf(i)!==-1?this.options.suppressUnpairedNode||(t="/"):this.options.suppressEmptyNode?t="/":t=`></${i}`,t};Vn.prototype.buildTextValNode=function(i,t,e,n){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(n)+`<![CDATA[${i}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(n)+`<!--${i}-->`+this.newLine;if(t[0]==="?")return this.indentate(n)+"<"+t+e+"?"+this.tagEndChar;{let r=this.options.tagValueProcessor(t,i);return r=this.replaceEntitiesValue(r),r===""?this.indentate(n)+"<"+t+e+this.closeTag(t)+this.tagEndChar:this.indentate(n)+"<"+t+e+">"+r+"</"+t+this.tagEndChar}};Vn.prototype.replaceEntitiesValue=function(i){if(i&&i.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const e=this.options.entities[t];i=i.replace(e.regex,e.val)}return i};function wg(i){return this.options.indentBy.repeat(i)}function Tg(i){return i.startsWith(this.options.attributeNamePrefix)&&i!==this.options.textNodeName?i.substr(this.attrPrefixLen):!1}var ts=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ag(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function es(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var oa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Al;function Cg(){return Al||(Al=1,(function(i,t){(function(e){i.exports=e()})(function(){return(function e(n,r,s){function a(u,p){if(!r[u]){if(!n[u]){var d=typeof es=="function"&&es;if(!p&&d)return d(u,!0);if(o)return o(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m}var h=r[u]={exports:{}};n[u][0].call(h.exports,function(x){var g=n[u][1][x];return a(g||x)},h,h.exports,e,n,r,s)}return r[u].exports}for(var o=typeof es=="function"&&es,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(e,n,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,p,d,m,h,x,g,f=[],c=0,E=l.length,M=E,w=s.getTypeOf(l)!=="string";c<l.length;)M=E-c,d=w?(u=l[c++],p=c<E?l[c++]:0,c<E?l[c++]:0):(u=l.charCodeAt(c++),p=c<E?l.charCodeAt(c++):0,c<E?l.charCodeAt(c++):0),m=u>>2,h=(3&u)<<4|p>>4,x=1<M?(15&p)<<2|d>>6:64,g=2<M?63&d:64,f.push(o.charAt(m)+o.charAt(h)+o.charAt(x)+o.charAt(g));return f.join("")},r.decode=function(l){var u,p,d,m,h,x,g=0,f=0,c="data:";if(l.substr(0,c.length)===c)throw new Error("Invalid base64 input, it looks like a data url.");var E,M=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&M--,l.charAt(l.length-2)===o.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(E=a.uint8array?new Uint8Array(0|M):new Array(0|M);g<l.length;)u=o.indexOf(l.charAt(g++))<<2|(m=o.indexOf(l.charAt(g++)))>>4,p=(15&m)<<4|(h=o.indexOf(l.charAt(g++)))>>2,d=(3&h)<<6|(x=o.indexOf(l.charAt(g++))),E[f++]=u,h!==64&&(E[f++]=p),x!==64&&(E[f++]=d);return E}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(p,d,m,h,x){this.compressedSize=p,this.uncompressedSize=d,this.crc32=m,this.compression=h,this.compressedContent=x}u.prototype={getContentWorker:function(){var p=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return p.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(p,d,m){return p.pipe(new o).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},n.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),a=(function(){for(var o,l=[],u=0;u<256;u++){o=u;for(var p=0;p<8;p++)o=1&o?3988292384^o>>>1:o>>>1;l[u]=o}return l})();n.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(u,p,d,m){var h=a,x=m+d;u^=-1;for(var g=m;g<x;g++)u=u>>>8^h[255&(u^p[g])];return-1^u})(0|l,o,o.length,0):(function(u,p,d,m){var h=a,x=m+d;u^=-1;for(var g=m;g<x;g++)u=u>>>8^h[255&(u^p.charCodeAt(g))];return-1^u})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function p(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}r.magic="\b\0",o.inherits(p,l),p.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(u,d.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},r.compressWorker=function(d){return new p("Deflate",d)},r.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(h,x){var g,f="";for(g=0;g<x;g++)f+=String.fromCharCode(255&h),h>>>=8;return f}function a(h,x,g,f,c,E){var M,w,D=h.file,N=h.compression,I=E!==u.utf8encode,O=o.transformTo("string",E(D.name)),T=o.transformTo("string",u.utf8encode(D.name)),A=D.comment,V=o.transformTo("string",E(A)),R=o.transformTo("string",u.utf8encode(A)),k=T.length!==D.name.length,S=R.length!==A.length,H="",at="",Z="",nt=D.dir,st=D.date,vt={crc32:0,compressedSize:0,uncompressedSize:0};x&&!g||(vt.crc32=h.crc32,vt.compressedSize=h.compressedSize,vt.uncompressedSize=h.uncompressedSize);var X=0;x&&(X|=8),I||!k&&!S||(X|=2048);var Y=0,Lt=0;nt&&(Y|=16),c==="UNIX"?(Lt=798,Y|=(function(it,Ct){var At=it;return it||(At=Ct?16893:33204),(65535&At)<<16})(D.unixPermissions,nt)):(Lt=20,Y|=(function(it){return 63&(it||0)})(D.dosPermissions)),M=st.getUTCHours(),M<<=6,M|=st.getUTCMinutes(),M<<=5,M|=st.getUTCSeconds()/2,w=st.getUTCFullYear()-1980,w<<=4,w|=st.getUTCMonth()+1,w<<=5,w|=st.getUTCDate(),k&&(at=s(1,1)+s(p(O),4)+T,H+="up"+s(at.length,2)+at),S&&(Z=s(1,1)+s(p(V),4)+R,H+="uc"+s(Z.length,2)+Z);var q="";return q+=`
\0`,q+=s(X,2),q+=N.magic,q+=s(M,2),q+=s(w,2),q+=s(vt.crc32,4),q+=s(vt.compressedSize,4),q+=s(vt.uncompressedSize,4),q+=s(O.length,2),q+=s(H.length,2),{fileRecord:d.LOCAL_FILE_HEADER+q+O+H,dirRecord:d.CENTRAL_FILE_HEADER+s(Lt,2)+q+s(V.length,2)+"\0\0\0\0"+s(Y,4)+s(f,4)+O+H+V}}var o=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),p=e("../crc32"),d=e("../signature");function m(h,x,g,f){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=g,this.encodeFileName=f,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(m,l),m.prototype.push=function(h){var x=h.meta.percent||0,g=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:g?(x+100*(g-f-1))/g:100}}))},m.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var x=this.streamFiles&&!h.file.dir;if(x){var g=a(h,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(h){this.accumulate=!1;var x=this.streamFiles&&!h.file.dir,g=a(h,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),x)this.push({data:(function(f){return d.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var h=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var g=this.bytesWritten-h,f=(function(c,E,M,w,D){var N=o.transformTo("string",D(w));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(c,2)+s(c,2)+s(E,4)+s(M,4)+s(N.length,2)+N})(this.dirRecords.length,g,h,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(h){this._sources.push(h);var x=this;return h.on("data",function(g){x.processChunk(g)}),h.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),h.on("error",function(g){x.error(g)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(h){var x=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var g=0;g<x.length;g++)try{x[g].error(h)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,x=0;x<h.length;x++)h[x].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,u){var p=new a(l.streamFiles,u,l.platform,l.encodeFileName),d=0;try{o.forEach(function(m,h){d++;var x=(function(E,M){var w=E||M,D=s[w];if(!D)throw new Error(w+" is not a valid compression method !");return D})(h.options.compression,l.compression),g=h.options.compressionOptions||l.compressionOptions||{},f=h.dir,c=h.date;h._compressWorker(x,g).withStreamInfo("file",{name:m,dir:f,date:c,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(p)}),p.entriesCount=d}catch(m){p.error(m)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),p=e("./nodejsUtils");function d(m){return new a.Promise(function(h,x){var g=m.decompressed.getContentWorker().pipe(new u);g.on("error",function(f){x(f)}).on("end",function(){g.streamInfo.crc32!==m.decompressed.crc32?x(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}n.exports=function(m,h){var x=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),p.isNode&&p.isStream(m)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,h.optimizedBinaryString,h.base64).then(function(g){var f=new l(h);return f.load(g),f}).then(function(g){var f=[a.Promise.resolve(g)],c=g.files;if(h.checkCRC32)for(var E=0;E<c.length;E++)f.push(d(c[E]));return a.Promise.all(f)}).then(function(g){for(var f=g.shift(),c=f.files,E=0;E<c.length;E++){var M=c[E],w=M.fileNameStr,D=s.resolve(M.fileNameStr);x.file(D,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:h.createFolders}),M.dir||(x.file(D).unsafeOriginalName=w)}return f.zipComment.length&&(x.comment=f.zipComment),x})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,u){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(o,a),o.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(p){u.push({data:p,meta:{percent:0}})}).on("error",function(p){u.isPaused?this.generatedError=p:u.error(p)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function a(o,l,u){s.call(this,l),this._helper=o;var p=this;o.on("data",function(d,m){p.push(d)||p._helper.pause(),u&&u(m)}).on("error",function(d){p.emit("error",d)}).on("end",function(){p.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(D,N,I){var O,T=o.getTypeOf(N),A=o.extend(I||{},p);A.date=A.date||new Date,A.compression!==null&&(A.compression=A.compression.toUpperCase()),typeof A.unixPermissions=="string"&&(A.unixPermissions=parseInt(A.unixPermissions,8)),A.unixPermissions&&16384&A.unixPermissions&&(A.dir=!0),A.dosPermissions&&16&A.dosPermissions&&(A.dir=!0),A.dir&&(D=c(D)),A.createFolders&&(O=f(D))&&E.call(this,O,!0);var V=T==="string"&&A.binary===!1&&A.base64===!1;I&&I.binary!==void 0||(A.binary=!V),(N instanceof d&&N.uncompressedSize===0||A.dir||!N||N.length===0)&&(A.base64=!1,A.binary=!0,N="",A.compression="STORE",T="string");var R=null;R=N instanceof d||N instanceof l?N:x.isNode&&x.isStream(N)?new g(D,N):o.prepareContent(D,N,A.binary,A.optimizedBinaryString,A.base64);var k=new m(D,R,A);this.files[D]=k}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),p=e("./defaults"),d=e("./compressedObject"),m=e("./zipObject"),h=e("./generate"),x=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),f=function(D){D.slice(-1)==="/"&&(D=D.substring(0,D.length-1));var N=D.lastIndexOf("/");return 0<N?D.substring(0,N):""},c=function(D){return D.slice(-1)!=="/"&&(D+="/"),D},E=function(D,N){return N=N!==void 0?N:p.createFolders,D=c(D),this.files[D]||s.call(this,D,null,{dir:!0,createFolders:N}),this.files[D]};function M(D){return Object.prototype.toString.call(D)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(D){var N,I,O;for(N in this.files)O=this.files[N],(I=N.slice(this.root.length,N.length))&&N.slice(0,this.root.length)===this.root&&D(I,O)},filter:function(D){var N=[];return this.forEach(function(I,O){D(I,O)&&N.push(O)}),N},file:function(D,N,I){if(arguments.length!==1)return D=this.root+D,s.call(this,D,N,I),this;if(M(D)){var O=D;return this.filter(function(A,V){return!V.dir&&O.test(A)})}var T=this.files[this.root+D];return T&&!T.dir?T:null},folder:function(D){if(!D)return this;if(M(D))return this.filter(function(T,A){return A.dir&&D.test(T)});var N=this.root+D,I=E.call(this,N),O=this.clone();return O.root=I.name,O},remove:function(D){D=this.root+D;var N=this.files[D];if(N||(D.slice(-1)!=="/"&&(D+="/"),N=this.files[D]),N&&!N.dir)delete this.files[D];else for(var I=this.filter(function(T,A){return A.name.slice(0,D.length)===D}),O=0;O<I.length;O++)delete this.files[I[O].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(D){var N,I={};try{if((I=o.extend(D||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");o.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var O=I.comment||this.comment||"";N=h.generateWorker(this,I,O)}catch(T){(N=new l("error")).error(T)}return new u(N,I.type||"string",I.mimeType)},generateAsync:function(D,N){return this.generateInternalStream(D).accumulate(N)},generateNodeStream:function(D,N){return(D=D||{}).type||(D.type="nodebuffer"),this.generateInternalStream(D).toNodejsStream(N)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),u=o.charCodeAt(1),p=o.charCodeAt(2),d=o.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===u&&this.data[m+2]===p&&this.data[m+3]===d)return m-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),u=o.charCodeAt(1),p=o.charCodeAt(2),d=o.charCodeAt(3),m=this.readData(4);return l===m[0]&&u===m[1]&&p===m[2]&&d===m[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,u=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=o,u},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),p=e("./Uint8ArrayReader");n.exports=function(d){var m=s.getTypeOf(d);return s.checkSupport(m),m!=="string"||a.uint8array?m==="nodebuffer"?new u(d):a.uint8array?new p(s.transformTo("uint8array",d)):new o(s.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){u.dataIsReady=!0,u.data=p,u.max=p&&p.length||0,u.type=s.getTypeOf(p),u.isPaused||u._tickAndRepeat()},function(p){u.error(p)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),u=e("../support"),p=e("../external"),d=null;if(u.nodestream)try{d=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(x,g){return new p.Promise(function(f,c){var E=[],M=x._internalType,w=x._outputType,D=x._mimeType;x.on("data",function(N,I){E.push(N),g&&g(I)}).on("error",function(N){E=[],c(N)}).on("end",function(){try{var N=(function(I,O,T){switch(I){case"blob":return s.newBlob(s.transformTo("arraybuffer",O),T);case"base64":return l.encode(O);default:return s.transformTo(I,O)}})(w,(function(I,O){var T,A=0,V=null,R=0;for(T=0;T<O.length;T++)R+=O[T].length;switch(I){case"string":return O.join("");case"array":return Array.prototype.concat.apply([],O);case"uint8array":for(V=new Uint8Array(R),T=0;T<O.length;T++)V.set(O[T],A),A+=O[T].length;return V;case"nodebuffer":return Buffer.concat(O);default:throw new Error("concat : unsupported type '"+I+"'")}})(M,E),D);f(N)}catch(I){c(I)}E=[]}).resume()})}function h(x,g,f){var c=g;switch(g){case"blob":case"arraybuffer":c="uint8array";break;case"base64":c="string"}try{this._internalType=c,this._outputType=g,this._mimeType=f,s.checkSupport(c),this._worker=x.pipe(new a(c)),x.lock()}catch(E){this._worker=new o("error"),this._worker.error(E)}}h.prototype={accumulate:function(x){return m(this,x)},on:function(x,g){var f=this;return x==="data"?this._worker.on(x,function(c){g.call(f,c.data,c.meta)}):this._worker.on(x,function(){s.delay(g,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(x){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},x)}},n.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),p=0;p<256;p++)u[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;u[254]=u[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(h){return a.nodebuffer?o.newBufferFrom(h,"utf-8"):(function(x){var g,f,c,E,M,w=x.length,D=0;for(E=0;E<w;E++)(64512&(f=x.charCodeAt(E)))==55296&&E+1<w&&(64512&(c=x.charCodeAt(E+1)))==56320&&(f=65536+(f-55296<<10)+(c-56320),E++),D+=f<128?1:f<2048?2:f<65536?3:4;for(g=a.uint8array?new Uint8Array(D):new Array(D),E=M=0;M<D;E++)(64512&(f=x.charCodeAt(E)))==55296&&E+1<w&&(64512&(c=x.charCodeAt(E+1)))==56320&&(f=65536+(f-55296<<10)+(c-56320),E++),f<128?g[M++]=f:(f<2048?g[M++]=192|f>>>6:(f<65536?g[M++]=224|f>>>12:(g[M++]=240|f>>>18,g[M++]=128|f>>>12&63),g[M++]=128|f>>>6&63),g[M++]=128|63&f);return g})(h)},r.utf8decode=function(h){return a.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):(function(x){var g,f,c,E,M=x.length,w=new Array(2*M);for(g=f=0;g<M;)if((c=x[g++])<128)w[f++]=c;else if(4<(E=u[c]))w[f++]=65533,g+=E-1;else{for(c&=E===2?31:E===3?15:7;1<E&&g<M;)c=c<<6|63&x[g++],E--;1<E?w[f++]=65533:c<65536?w[f++]=c:(c-=65536,w[f++]=55296|c>>10&1023,w[f++]=56320|1023&c)}return w.length!==f&&(w.subarray?w=w.subarray(0,f):w.length=f),s.applyFromCharCode(w)})(h=s.transformTo(a.uint8array?"uint8array":"array",h))},s.inherits(d,l),d.prototype.processChunk=function(h){var x=s.transformTo(a.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=x;(x=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),x.set(g,this.leftOver.length)}else x=this.leftOver.concat(x);this.leftOver=null}var f=(function(E,M){var w;for((M=M||E.length)>E.length&&(M=E.length),w=M-1;0<=w&&(192&E[w])==128;)w--;return w<0||w===0?M:w+u[E[w]]>M?w:M})(x),c=x;f!==x.length&&(a.uint8array?(c=x.subarray(0,f),this.leftOver=x.subarray(f,x.length)):(c=x.slice(0,f),this.leftOver=x.slice(f,x.length))),this.push({data:r.utf8decode(c),meta:h.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,s.inherits(m,l),m.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function u(g){return g}function p(g,f){for(var c=0;c<g.length;++c)f[c]=255&g.charCodeAt(c);return f}e("setimmediate"),r.newBlob=function(g,f){r.checkSupport("blob");try{return new Blob([g],{type:f})}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return c.append(g),c.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(g,f,c){var E=[],M=0,w=g.length;if(w<=c)return String.fromCharCode.apply(null,g);for(;M<w;)f==="array"||f==="nodebuffer"?E.push(String.fromCharCode.apply(null,g.slice(M,Math.min(M+c,w)))):E.push(String.fromCharCode.apply(null,g.subarray(M,Math.min(M+c,w)))),M+=c;return E.join("")},stringifyByChar:function(g){for(var f="",c=0;c<g.length;c++)f+=String.fromCharCode(g[c]);return f},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function m(g){var f=65536,c=r.getTypeOf(g),E=!0;if(c==="uint8array"?E=d.applyCanBeUsed.uint8array:c==="nodebuffer"&&(E=d.applyCanBeUsed.nodebuffer),E)for(;1<f;)try{return d.stringifyByChunk(g,c,f)}catch{f=Math.floor(f/2)}return d.stringifyByChar(g)}function h(g,f){for(var c=0;c<g.length;c++)f[c]=g[c];return f}r.applyFromCharCode=m;var x={};x.string={string:u,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return x.string.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:function(g){return p(g,o.allocBuffer(g.length))}},x.array={string:m,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},x.arraybuffer={string:function(g){return m(new Uint8Array(g))},array:function(g){return h(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},x.uint8array={string:m,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return o.newBufferFrom(g)}},x.nodebuffer={string:m,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return x.nodebuffer.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,f){if(f=f||"",!g)return f;r.checkSupport(g);var c=r.getTypeOf(f);return x[c][g](f)},r.resolve=function(g){for(var f=g.split("/"),c=[],E=0;E<f.length;E++){var M=f[E];M==="."||M===""&&E!==0&&E!==f.length-1||(M===".."?c.pop():c.push(M))}return c.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var f,c,E="";for(c=0;c<(g||"").length;c++)E+="\\x"+((f=g.charCodeAt(c))<16?"0":"")+f.toString(16).toUpperCase();return E},r.delay=function(g,f,c){setImmediate(function(){g.apply(c||null,f||[])})},r.inherits=function(g,f){function c(){}c.prototype=f.prototype,g.prototype=new c},r.extend=function(){var g,f,c={};for(g=0;g<arguments.length;g++)for(f in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],f)&&c[f]===void 0&&(c[f]=arguments[g][f]);return c},r.prepareContent=function(g,f,c,E,M){return l.Promise.resolve(f).then(function(w){return s.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(D,N){var I=new FileReader;I.onload=function(O){D(O.target.result)},I.onerror=function(O){N(O.target.error)},I.readAsArrayBuffer(w)}):w}).then(function(w){var D=r.getTypeOf(w);return D?(D==="arraybuffer"?w=r.transformTo("uint8array",w):D==="string"&&(M?w=a.decode(w):c&&E!==!0&&(w=(function(N){return p(N,s.uint8array?new Uint8Array(N.length):new Array(N.length))})(w))),w):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),u=e("./support");function p(d){this.files=[],this.loadOptions=d}p.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(m)+", expected "+a.pretty(d)+")")}},isSignature:function(d,m){var h=this.reader.index;this.reader.setIndex(d);var x=this.reader.readString(4)===m;return this.reader.setIndex(h),x},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=u.uint8array?"uint8array":"array",h=a.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,h,x=this.zip64EndOfCentralSize-44;0<x;)d=this.reader.readInt(2),m=this.reader.readInt(4),h=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var x=m-h;if(0<x)this.isSignature(m,o.CENTRAL_FILE_HEADER)||(this.reader.zero=x);else if(x<0)throw new Error("Corrupted zip: missing "+Math.abs(x)+" bytes.")},prepareReader:function(d){this.reader=s(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),p=e("./compressions"),d=e("./support");function m(h,x){this.options=h,this.loadOptions=x}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var x,g;if(h.skip(22),this.fileNameLength=h.readInt(2),g=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((x=(function(f){for(var c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&p[c].magic===f)return p[c];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,x,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var x=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(x),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var x,g,f,c=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<c;)x=h.readInt(2),g=h.readInt(2),f=h.readData(g),this.extraFields[x]={id:x,length:g,value:f};h.setIndex(c)},handleUTF8:function(){var h=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var x=this.findExtraFieldUnicodePath();if(x!==null)this.fileNameStr=x;else{var g=a.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var c=a.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(c)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var x=s(h.value);return x.readInt(1)!==1||l(this.fileName)!==x.readInt(4)?null:u.utf8decode(x.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var x=s(h.value);return x.readInt(1)!==1||l(this.fileComment)!==x.readInt(4)?null:u.utf8decode(x.readData(h.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(x,g,f){this.name=x,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=g,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),p=e("./stream/GenericWorker");s.prototype={internalStream:function(x){var g=null,f="string";try{if(!x)throw new Error("No output type specified.");var c=(f=x.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),g=this._decompressWorker();var E=!this._dataBinary;E&&!c&&(g=g.pipe(new l.Utf8EncodeWorker)),!E&&c&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(M){(g=new p("error")).error(M)}return new a(g,f,"")},async:function(x,g){return this.internalStream(x).accumulate(g)},nodeStream:function(x,g){return this.internalStream(x||"nodebuffer").toNodejsStream(g)},_compressWorker:function(x,g){if(this._data instanceof u&&this._data.compression.magic===x.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(f,x,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof p?this._data:new o(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<d.length;h++)s.prototype[d[h]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,p=new l(x),d=s.document.createTextNode("");p.observe(d,{characterData:!0}),a=function(){d.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){x(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(x,0)};else{var m=new s.MessageChannel;m.port1.onmessage=x,a=function(){m.port2.postMessage(0)}}var h=[];function x(){var g,f;o=!0;for(var c=h.length;c;){for(f=h,h=[],g=-1;++g<c;)f[g]();c=h.length}o=!1}n.exports=function(g){h.push(g)!==1||o||a()}}).call(this,typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],u=["FULFILLED"],p=["PENDING"];function d(c){if(typeof c!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,c!==a&&g(this,c)}function m(c,E,M){this.promise=c,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function h(c,E,M){s(function(){var w;try{w=E(M)}catch(D){return o.reject(c,D)}w===c?o.reject(c,new TypeError("Cannot resolve promise with itself")):o.resolve(c,w)})}function x(c){var E=c&&c.then;if(c&&(typeof c=="object"||typeof c=="function")&&typeof E=="function")return function(){E.apply(c,arguments)}}function g(c,E){var M=!1;function w(I){M||(M=!0,o.reject(c,I))}function D(I){M||(M=!0,o.resolve(c,I))}var N=f(function(){E(D,w)});N.status==="error"&&w(N.value)}function f(c,E){var M={};try{M.value=c(E),M.status="success"}catch(w){M.status="error",M.value=w}return M}(n.exports=d).prototype.finally=function(c){if(typeof c!="function")return this;var E=this.constructor;return this.then(function(M){return E.resolve(c()).then(function(){return M})},function(M){return E.resolve(c()).then(function(){throw M})})},d.prototype.catch=function(c){return this.then(null,c)},d.prototype.then=function(c,E){if(typeof c!="function"&&this.state===u||typeof E!="function"&&this.state===l)return this;var M=new this.constructor(a);return this.state!==p?h(M,this.state===u?c:E,this.outcome):this.queue.push(new m(M,c,E)),M},m.prototype.callFulfilled=function(c){o.resolve(this.promise,c)},m.prototype.otherCallFulfilled=function(c){h(this.promise,this.onFulfilled,c)},m.prototype.callRejected=function(c){o.reject(this.promise,c)},m.prototype.otherCallRejected=function(c){h(this.promise,this.onRejected,c)},o.resolve=function(c,E){var M=f(x,E);if(M.status==="error")return o.reject(c,M.value);var w=M.value;if(w)g(c,w);else{c.state=u,c.outcome=E;for(var D=-1,N=c.queue.length;++D<N;)c.queue[D].callFulfilled(E)}return c},o.reject=function(c,E){c.state=l,c.outcome=E;for(var M=-1,w=c.queue.length;++M<w;)c.queue[M].callRejected(E);return c},d.resolve=function(c){return c instanceof this?c:o.resolve(new this(a),c)},d.reject=function(c){var E=new this(a);return o.reject(E,c)},d.all=function(c){var E=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=c.length,w=!1;if(!M)return this.resolve([]);for(var D=new Array(M),N=0,I=-1,O=new this(a);++I<M;)T(c[I],I);return O;function T(A,V){E.resolve(A).then(function(R){D[V]=R,++N!==M||w||(w=!0,o.resolve(O,D))},function(R){w||(w=!0,o.reject(O,R))})}},d.race=function(c){var E=this;if(Object.prototype.toString.call(c)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=c.length,w=!1;if(!M)return this.resolve([]);for(var D=-1,N=new this(a);++D<M;)I=c[D],E.resolve(I).then(function(O){w||(w=!0,o.resolve(N,O))},function(O){w||(w=!0,o.reject(N,O))});var I;return N}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),p=Object.prototype.toString,d=0,m=-1,h=0,x=8;function g(c){if(!(this instanceof g))return new g(c);this.options=a.assign({level:m,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},c||{});var E=this.options;E.raw&&0<E.windowBits?E.windowBits=-E.windowBits:E.gzip&&0<E.windowBits&&E.windowBits<16&&(E.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var M=s.deflateInit2(this.strm,E.level,E.method,E.windowBits,E.memLevel,E.strategy);if(M!==d)throw new Error(l[M]);if(E.header&&s.deflateSetHeader(this.strm,E.header),E.dictionary){var w;if(w=typeof E.dictionary=="string"?o.string2buf(E.dictionary):p.call(E.dictionary)==="[object ArrayBuffer]"?new Uint8Array(E.dictionary):E.dictionary,(M=s.deflateSetDictionary(this.strm,w))!==d)throw new Error(l[M]);this._dict_set=!0}}function f(c,E){var M=new g(E);if(M.push(c,!0),M.err)throw M.msg||l[M.err];return M.result}g.prototype.push=function(c,E){var M,w,D=this.strm,N=this.options.chunkSize;if(this.ended)return!1;w=E===~~E?E:E===!0?4:0,typeof c=="string"?D.input=o.string2buf(c):p.call(c)==="[object ArrayBuffer]"?D.input=new Uint8Array(c):D.input=c,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new a.Buf8(N),D.next_out=0,D.avail_out=N),(M=s.deflate(D,w))!==1&&M!==d)return this.onEnd(M),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(D.output,D.next_out))):this.onData(a.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&M!==1);return w===4?(M=s.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===d):w!==2||(this.onEnd(d),!(D.avail_out=0))},g.prototype.onData=function(c){this.chunks.push(c)},g.prototype.onEnd=function(c){c===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},r.Deflate=g,r.deflate=f,r.deflateRaw=function(c,E){return(E=E||{}).raw=!0,f(c,E)},r.gzip=function(c,E){return(E=E||{}).gzip=!0,f(c,E)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),p=e("./zlib/zstream"),d=e("./zlib/gzheader"),m=Object.prototype.toString;function h(g){if(!(this instanceof h))return new h(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||g&&g.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&(15&f.windowBits)==0&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var c=s.inflateInit2(this.strm,f.windowBits);if(c!==l.Z_OK)throw new Error(u[c]);this.header=new d,s.inflateGetHeader(this.strm,this.header)}function x(g,f){var c=new h(f);if(c.push(g,!0),c.err)throw c.msg||u[c.err];return c.result}h.prototype.push=function(g,f){var c,E,M,w,D,N,I=this.strm,O=this.options.chunkSize,T=this.options.dictionary,A=!1;if(this.ended)return!1;E=f===~~f?f:f===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?I.input=o.binstring2buf(g):m.call(g)==="[object ArrayBuffer]"?I.input=new Uint8Array(g):I.input=g,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new a.Buf8(O),I.next_out=0,I.avail_out=O),(c=s.inflate(I,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&T&&(N=typeof T=="string"?o.string2buf(T):m.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,c=s.inflateSetDictionary(this.strm,N)),c===l.Z_BUF_ERROR&&A===!0&&(c=l.Z_OK,A=!1),c!==l.Z_STREAM_END&&c!==l.Z_OK)return this.onEnd(c),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&c!==l.Z_STREAM_END&&(I.avail_in!==0||E!==l.Z_FINISH&&E!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=o.utf8border(I.output,I.next_out),w=I.next_out-M,D=o.buf2string(I.output,M),I.next_out=w,I.avail_out=O-w,w&&a.arraySet(I.output,I.output,M,w,0),this.onData(D)):this.onData(a.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(A=!0)}while((0<I.avail_in||I.avail_out===0)&&c!==l.Z_STREAM_END);return c===l.Z_STREAM_END&&(E=l.Z_FINISH),E===l.Z_FINISH?(c=s.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===l.Z_OK):E!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(I.avail_out=0))},h.prototype.onData=function(g){this.chunks.push(g)},h.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=h,r.inflate=x,r.inflateRaw=function(g,f){return(f=f||{}).raw=!0,x(g,f)},r.ungzip=x},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var p=u.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var d in p)p.hasOwnProperty(d)&&(l[d]=p[d])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var a={arraySet:function(l,u,p,d,m){if(u.subarray&&l.subarray)l.set(u.subarray(p,p+d),m);else for(var h=0;h<d;h++)l[m+h]=u[p+h]},flattenChunks:function(l){var u,p,d,m,h,x;for(u=d=0,p=l.length;u<p;u++)d+=l[u].length;for(x=new Uint8Array(d),u=m=0,p=l.length;u<p;u++)h=l[u],x.set(h,m),m+=h.length;return x}},o={arraySet:function(l,u,p,d,m){for(var h=0;h<d;h++)l[m+h]=u[p+h]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function p(d,m){if(m<65537&&(d.subarray&&o||!d.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(d,m));for(var h="",x=0;x<m;x++)h+=String.fromCharCode(d[x]);return h}l[254]=l[254]=1,r.string2buf=function(d){var m,h,x,g,f,c=d.length,E=0;for(g=0;g<c;g++)(64512&(h=d.charCodeAt(g)))==55296&&g+1<c&&(64512&(x=d.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(x-56320),g++),E+=h<128?1:h<2048?2:h<65536?3:4;for(m=new s.Buf8(E),g=f=0;f<E;g++)(64512&(h=d.charCodeAt(g)))==55296&&g+1<c&&(64512&(x=d.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(x-56320),g++),h<128?m[f++]=h:(h<2048?m[f++]=192|h>>>6:(h<65536?m[f++]=224|h>>>12:(m[f++]=240|h>>>18,m[f++]=128|h>>>12&63),m[f++]=128|h>>>6&63),m[f++]=128|63&h);return m},r.buf2binstring=function(d){return p(d,d.length)},r.binstring2buf=function(d){for(var m=new s.Buf8(d.length),h=0,x=m.length;h<x;h++)m[h]=d.charCodeAt(h);return m},r.buf2string=function(d,m){var h,x,g,f,c=m||d.length,E=new Array(2*c);for(h=x=0;h<c;)if((g=d[h++])<128)E[x++]=g;else if(4<(f=l[g]))E[x++]=65533,h+=f-1;else{for(g&=f===2?31:f===3?15:7;1<f&&h<c;)g=g<<6|63&d[h++],f--;1<f?E[x++]=65533:g<65536?E[x++]=g:(g-=65536,E[x++]=55296|g>>10&1023,E[x++]=56320|1023&g)}return p(E,x)},r.utf8border=function(d,m){var h;for((m=m||d.length)>d.length&&(m=d.length),h=m-1;0<=h&&(192&d[h])==128;)h--;return h<0||h===0?m:h+l[d[h]]>m?h:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,a,o,l){for(var u=65535&s|0,p=s>>>16&65535|0,d=0;o!==0;){for(o-=d=2e3<o?2e3:o;p=p+(u=u+a[l++]|0)|0,--d;);u%=65521,p%=65521}return u|p<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();n.exports=function(a,o,l,u){var p=s,d=u+l;a^=-1;for(var m=u;m<d;m++)a=a>>>8^p[255&(a^o[m])];return-1^a}},{}],46:[function(e,n,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),u=e("./crc32"),p=e("./messages"),d=0,m=4,h=0,x=-2,g=-1,f=4,c=2,E=8,M=9,w=286,D=30,N=19,I=2*w+1,O=15,T=3,A=258,V=A+T+1,R=42,k=113,S=1,H=2,at=3,Z=4;function nt(_,pt){return _.msg=p[pt],pt}function st(_){return(_<<1)-(4<_?9:0)}function vt(_){for(var pt=_.length;0<=--pt;)_[pt]=0}function X(_){var pt=_.state,tt=pt.pending;tt>_.avail_out&&(tt=_.avail_out),tt!==0&&(a.arraySet(_.output,pt.pending_buf,pt.pending_out,tt,_.next_out),_.next_out+=tt,pt.pending_out+=tt,_.total_out+=tt,_.avail_out-=tt,pt.pending-=tt,pt.pending===0&&(pt.pending_out=0))}function Y(_,pt){o._tr_flush_block(_,0<=_.block_start?_.block_start:-1,_.strstart-_.block_start,pt),_.block_start=_.strstart,X(_.strm)}function Lt(_,pt){_.pending_buf[_.pending++]=pt}function q(_,pt){_.pending_buf[_.pending++]=pt>>>8&255,_.pending_buf[_.pending++]=255&pt}function it(_,pt){var tt,F,L=_.max_chain_length,W=_.strstart,ot=_.prev_length,C=_.nice_match,b=_.strstart>_.w_size-V?_.strstart-(_.w_size-V):0,z=_.window,J=_.w_mask,j=_.prev,et=_.strstart+A,Pt=z[W+ot-1],xt=z[W+ot];_.prev_length>=_.good_match&&(L>>=2),C>_.lookahead&&(C=_.lookahead);do if(z[(tt=pt)+ot]===xt&&z[tt+ot-1]===Pt&&z[tt]===z[W]&&z[++tt]===z[W+1]){W+=2,tt++;do;while(z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&z[++W]===z[++tt]&&W<et);if(F=A-(et-W),W=et-A,ot<F){if(_.match_start=pt,C<=(ot=F))break;Pt=z[W+ot-1],xt=z[W+ot]}}while((pt=j[pt&J])>b&&--L!=0);return ot<=_.lookahead?ot:_.lookahead}function Ct(_){var pt,tt,F,L,W,ot,C,b,z,J,j=_.w_size;do{if(L=_.window_size-_.lookahead-_.strstart,_.strstart>=j+(j-V)){for(a.arraySet(_.window,_.window,j,j,0),_.match_start-=j,_.strstart-=j,_.block_start-=j,pt=tt=_.hash_size;F=_.head[--pt],_.head[pt]=j<=F?F-j:0,--tt;);for(pt=tt=j;F=_.prev[--pt],_.prev[pt]=j<=F?F-j:0,--tt;);L+=j}if(_.strm.avail_in===0)break;if(ot=_.strm,C=_.window,b=_.strstart+_.lookahead,z=L,J=void 0,J=ot.avail_in,z<J&&(J=z),tt=J===0?0:(ot.avail_in-=J,a.arraySet(C,ot.input,ot.next_in,J,b),ot.state.wrap===1?ot.adler=l(ot.adler,C,J,b):ot.state.wrap===2&&(ot.adler=u(ot.adler,C,J,b)),ot.next_in+=J,ot.total_in+=J,J),_.lookahead+=tt,_.lookahead+_.insert>=T)for(W=_.strstart-_.insert,_.ins_h=_.window[W],_.ins_h=(_.ins_h<<_.hash_shift^_.window[W+1])&_.hash_mask;_.insert&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[W+T-1])&_.hash_mask,_.prev[W&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=W,W++,_.insert--,!(_.lookahead+_.insert<T)););}while(_.lookahead<V&&_.strm.avail_in!==0)}function At(_,pt){for(var tt,F;;){if(_.lookahead<V){if(Ct(_),_.lookahead<V&&pt===d)return S;if(_.lookahead===0)break}if(tt=0,_.lookahead>=T&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+T-1])&_.hash_mask,tt=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),tt!==0&&_.strstart-tt<=_.w_size-V&&(_.match_length=it(_,tt)),_.match_length>=T)if(F=o._tr_tally(_,_.strstart-_.match_start,_.match_length-T),_.lookahead-=_.match_length,_.match_length<=_.max_lazy_match&&_.lookahead>=T){for(_.match_length--;_.strstart++,_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+T-1])&_.hash_mask,tt=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart,--_.match_length!=0;);_.strstart++}else _.strstart+=_.match_length,_.match_length=0,_.ins_h=_.window[_.strstart],_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+1])&_.hash_mask;else F=o._tr_tally(_,0,_.window[_.strstart]),_.lookahead--,_.strstart++;if(F&&(Y(_,!1),_.strm.avail_out===0))return S}return _.insert=_.strstart<T-1?_.strstart:T-1,pt===m?(Y(_,!0),_.strm.avail_out===0?at:Z):_.last_lit&&(Y(_,!1),_.strm.avail_out===0)?S:H}function Rt(_,pt){for(var tt,F,L;;){if(_.lookahead<V){if(Ct(_),_.lookahead<V&&pt===d)return S;if(_.lookahead===0)break}if(tt=0,_.lookahead>=T&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+T-1])&_.hash_mask,tt=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),_.prev_length=_.match_length,_.prev_match=_.match_start,_.match_length=T-1,tt!==0&&_.prev_length<_.max_lazy_match&&_.strstart-tt<=_.w_size-V&&(_.match_length=it(_,tt),_.match_length<=5&&(_.strategy===1||_.match_length===T&&4096<_.strstart-_.match_start)&&(_.match_length=T-1)),_.prev_length>=T&&_.match_length<=_.prev_length){for(L=_.strstart+_.lookahead-T,F=o._tr_tally(_,_.strstart-1-_.prev_match,_.prev_length-T),_.lookahead-=_.prev_length-1,_.prev_length-=2;++_.strstart<=L&&(_.ins_h=(_.ins_h<<_.hash_shift^_.window[_.strstart+T-1])&_.hash_mask,tt=_.prev[_.strstart&_.w_mask]=_.head[_.ins_h],_.head[_.ins_h]=_.strstart),--_.prev_length!=0;);if(_.match_available=0,_.match_length=T-1,_.strstart++,F&&(Y(_,!1),_.strm.avail_out===0))return S}else if(_.match_available){if((F=o._tr_tally(_,0,_.window[_.strstart-1]))&&Y(_,!1),_.strstart++,_.lookahead--,_.strm.avail_out===0)return S}else _.match_available=1,_.strstart++,_.lookahead--}return _.match_available&&(F=o._tr_tally(_,0,_.window[_.strstart-1]),_.match_available=0),_.insert=_.strstart<T-1?_.strstart:T-1,pt===m?(Y(_,!0),_.strm.avail_out===0?at:Z):_.last_lit&&(Y(_,!1),_.strm.avail_out===0)?S:H}function Vt(_,pt,tt,F,L){this.good_length=_,this.max_lazy=pt,this.nice_length=tt,this.max_chain=F,this.func=L}function Ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=E,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*I),this.dyn_dtree=new a.Buf16(2*(2*D+1)),this.bl_tree=new a.Buf16(2*(2*N+1)),vt(this.dyn_ltree),vt(this.dyn_dtree),vt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(O+1),this.heap=new a.Buf16(2*w+1),vt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),vt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Qt(_){var pt;return _&&_.state?(_.total_in=_.total_out=0,_.data_type=c,(pt=_.state).pending=0,pt.pending_out=0,pt.wrap<0&&(pt.wrap=-pt.wrap),pt.status=pt.wrap?R:k,_.adler=pt.wrap===2?0:1,pt.last_flush=d,o._tr_init(pt),h):nt(_,x)}function oe(_){var pt=Qt(_);return pt===h&&(function(tt){tt.window_size=2*tt.w_size,vt(tt.head),tt.max_lazy_match=s[tt.level].max_lazy,tt.good_match=s[tt.level].good_length,tt.nice_match=s[tt.level].nice_length,tt.max_chain_length=s[tt.level].max_chain,tt.strstart=0,tt.block_start=0,tt.lookahead=0,tt.insert=0,tt.match_length=tt.prev_length=T-1,tt.match_available=0,tt.ins_h=0})(_.state),pt}function Zt(_,pt,tt,F,L,W){if(!_)return x;var ot=1;if(pt===g&&(pt=6),F<0?(ot=0,F=-F):15<F&&(ot=2,F-=16),L<1||M<L||tt!==E||F<8||15<F||pt<0||9<pt||W<0||f<W)return nt(_,x);F===8&&(F=9);var C=new Ht;return(_.state=C).strm=_,C.wrap=ot,C.gzhead=null,C.w_bits=F,C.w_size=1<<C.w_bits,C.w_mask=C.w_size-1,C.hash_bits=L+7,C.hash_size=1<<C.hash_bits,C.hash_mask=C.hash_size-1,C.hash_shift=~~((C.hash_bits+T-1)/T),C.window=new a.Buf8(2*C.w_size),C.head=new a.Buf16(C.hash_size),C.prev=new a.Buf16(C.w_size),C.lit_bufsize=1<<L+6,C.pending_buf_size=4*C.lit_bufsize,C.pending_buf=new a.Buf8(C.pending_buf_size),C.d_buf=1*C.lit_bufsize,C.l_buf=3*C.lit_bufsize,C.level=pt,C.strategy=W,C.method=tt,oe(_)}s=[new Vt(0,0,0,0,function(_,pt){var tt=65535;for(tt>_.pending_buf_size-5&&(tt=_.pending_buf_size-5);;){if(_.lookahead<=1){if(Ct(_),_.lookahead===0&&pt===d)return S;if(_.lookahead===0)break}_.strstart+=_.lookahead,_.lookahead=0;var F=_.block_start+tt;if((_.strstart===0||_.strstart>=F)&&(_.lookahead=_.strstart-F,_.strstart=F,Y(_,!1),_.strm.avail_out===0)||_.strstart-_.block_start>=_.w_size-V&&(Y(_,!1),_.strm.avail_out===0))return S}return _.insert=0,pt===m?(Y(_,!0),_.strm.avail_out===0?at:Z):(_.strstart>_.block_start&&(Y(_,!1),_.strm.avail_out),S)}),new Vt(4,4,8,4,At),new Vt(4,5,16,8,At),new Vt(4,6,32,32,At),new Vt(4,4,16,16,Rt),new Vt(8,16,32,32,Rt),new Vt(8,16,128,128,Rt),new Vt(8,32,128,256,Rt),new Vt(32,128,258,1024,Rt),new Vt(32,258,258,4096,Rt)],r.deflateInit=function(_,pt){return Zt(_,pt,E,15,8,0)},r.deflateInit2=Zt,r.deflateReset=oe,r.deflateResetKeep=Qt,r.deflateSetHeader=function(_,pt){return _&&_.state?_.state.wrap!==2?x:(_.state.gzhead=pt,h):x},r.deflate=function(_,pt){var tt,F,L,W;if(!_||!_.state||5<pt||pt<0)return _?nt(_,x):x;if(F=_.state,!_.output||!_.input&&_.avail_in!==0||F.status===666&&pt!==m)return nt(_,_.avail_out===0?-5:x);if(F.strm=_,tt=F.last_flush,F.last_flush=pt,F.status===R)if(F.wrap===2)_.adler=0,Lt(F,31),Lt(F,139),Lt(F,8),F.gzhead?(Lt(F,(F.gzhead.text?1:0)+(F.gzhead.hcrc?2:0)+(F.gzhead.extra?4:0)+(F.gzhead.name?8:0)+(F.gzhead.comment?16:0)),Lt(F,255&F.gzhead.time),Lt(F,F.gzhead.time>>8&255),Lt(F,F.gzhead.time>>16&255),Lt(F,F.gzhead.time>>24&255),Lt(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),Lt(F,255&F.gzhead.os),F.gzhead.extra&&F.gzhead.extra.length&&(Lt(F,255&F.gzhead.extra.length),Lt(F,F.gzhead.extra.length>>8&255)),F.gzhead.hcrc&&(_.adler=u(_.adler,F.pending_buf,F.pending,0)),F.gzindex=0,F.status=69):(Lt(F,0),Lt(F,0),Lt(F,0),Lt(F,0),Lt(F,0),Lt(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),Lt(F,3),F.status=k);else{var ot=E+(F.w_bits-8<<4)<<8;ot|=(2<=F.strategy||F.level<2?0:F.level<6?1:F.level===6?2:3)<<6,F.strstart!==0&&(ot|=32),ot+=31-ot%31,F.status=k,q(F,ot),F.strstart!==0&&(q(F,_.adler>>>16),q(F,65535&_.adler)),_.adler=1}if(F.status===69)if(F.gzhead.extra){for(L=F.pending;F.gzindex<(65535&F.gzhead.extra.length)&&(F.pending!==F.pending_buf_size||(F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),X(_),L=F.pending,F.pending!==F.pending_buf_size));)Lt(F,255&F.gzhead.extra[F.gzindex]),F.gzindex++;F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),F.gzindex===F.gzhead.extra.length&&(F.gzindex=0,F.status=73)}else F.status=73;if(F.status===73)if(F.gzhead.name){L=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),X(_),L=F.pending,F.pending===F.pending_buf_size)){W=1;break}W=F.gzindex<F.gzhead.name.length?255&F.gzhead.name.charCodeAt(F.gzindex++):0,Lt(F,W)}while(W!==0);F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),W===0&&(F.gzindex=0,F.status=91)}else F.status=91;if(F.status===91)if(F.gzhead.comment){L=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),X(_),L=F.pending,F.pending===F.pending_buf_size)){W=1;break}W=F.gzindex<F.gzhead.comment.length?255&F.gzhead.comment.charCodeAt(F.gzindex++):0,Lt(F,W)}while(W!==0);F.gzhead.hcrc&&F.pending>L&&(_.adler=u(_.adler,F.pending_buf,F.pending-L,L)),W===0&&(F.status=103)}else F.status=103;if(F.status===103&&(F.gzhead.hcrc?(F.pending+2>F.pending_buf_size&&X(_),F.pending+2<=F.pending_buf_size&&(Lt(F,255&_.adler),Lt(F,_.adler>>8&255),_.adler=0,F.status=k)):F.status=k),F.pending!==0){if(X(_),_.avail_out===0)return F.last_flush=-1,h}else if(_.avail_in===0&&st(pt)<=st(tt)&&pt!==m)return nt(_,-5);if(F.status===666&&_.avail_in!==0)return nt(_,-5);if(_.avail_in!==0||F.lookahead!==0||pt!==d&&F.status!==666){var C=F.strategy===2?(function(b,z){for(var J;;){if(b.lookahead===0&&(Ct(b),b.lookahead===0)){if(z===d)return S;break}if(b.match_length=0,J=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,J&&(Y(b,!1),b.strm.avail_out===0))return S}return b.insert=0,z===m?(Y(b,!0),b.strm.avail_out===0?at:Z):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?S:H})(F,pt):F.strategy===3?(function(b,z){for(var J,j,et,Pt,xt=b.window;;){if(b.lookahead<=A){if(Ct(b),b.lookahead<=A&&z===d)return S;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=T&&0<b.strstart&&(j=xt[et=b.strstart-1])===xt[++et]&&j===xt[++et]&&j===xt[++et]){Pt=b.strstart+A;do;while(j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&j===xt[++et]&&et<Pt);b.match_length=A-(Pt-et),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=T?(J=o._tr_tally(b,1,b.match_length-T),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(J=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),J&&(Y(b,!1),b.strm.avail_out===0))return S}return b.insert=0,z===m?(Y(b,!0),b.strm.avail_out===0?at:Z):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?S:H})(F,pt):s[F.level].func(F,pt);if(C!==at&&C!==Z||(F.status=666),C===S||C===at)return _.avail_out===0&&(F.last_flush=-1),h;if(C===H&&(pt===1?o._tr_align(F):pt!==5&&(o._tr_stored_block(F,0,0,!1),pt===3&&(vt(F.head),F.lookahead===0&&(F.strstart=0,F.block_start=0,F.insert=0))),X(_),_.avail_out===0))return F.last_flush=-1,h}return pt!==m?h:F.wrap<=0?1:(F.wrap===2?(Lt(F,255&_.adler),Lt(F,_.adler>>8&255),Lt(F,_.adler>>16&255),Lt(F,_.adler>>24&255),Lt(F,255&_.total_in),Lt(F,_.total_in>>8&255),Lt(F,_.total_in>>16&255),Lt(F,_.total_in>>24&255)):(q(F,_.adler>>>16),q(F,65535&_.adler)),X(_),0<F.wrap&&(F.wrap=-F.wrap),F.pending!==0?h:1)},r.deflateEnd=function(_){var pt;return _&&_.state?(pt=_.state.status)!==R&&pt!==69&&pt!==73&&pt!==91&&pt!==103&&pt!==k&&pt!==666?nt(_,x):(_.state=null,pt===k?nt(_,-3):h):x},r.deflateSetDictionary=function(_,pt){var tt,F,L,W,ot,C,b,z,J=pt.length;if(!_||!_.state||(W=(tt=_.state).wrap)===2||W===1&&tt.status!==R||tt.lookahead)return x;for(W===1&&(_.adler=l(_.adler,pt,J,0)),tt.wrap=0,J>=tt.w_size&&(W===0&&(vt(tt.head),tt.strstart=0,tt.block_start=0,tt.insert=0),z=new a.Buf8(tt.w_size),a.arraySet(z,pt,J-tt.w_size,tt.w_size,0),pt=z,J=tt.w_size),ot=_.avail_in,C=_.next_in,b=_.input,_.avail_in=J,_.next_in=0,_.input=pt,Ct(tt);tt.lookahead>=T;){for(F=tt.strstart,L=tt.lookahead-(T-1);tt.ins_h=(tt.ins_h<<tt.hash_shift^tt.window[F+T-1])&tt.hash_mask,tt.prev[F&tt.w_mask]=tt.head[tt.ins_h],tt.head[tt.ins_h]=F,F++,--L;);tt.strstart=F,tt.lookahead=T-1,Ct(tt)}return tt.strstart+=tt.lookahead,tt.block_start=tt.strstart,tt.insert=tt.lookahead,tt.lookahead=0,tt.match_length=tt.prev_length=T-1,tt.match_available=0,_.next_in=C,_.input=b,_.avail_in=ot,tt.wrap=W,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,a){var o,l,u,p,d,m,h,x,g,f,c,E,M,w,D,N,I,O,T,A,V,R,k,S,H;o=s.state,l=s.next_in,S=s.input,u=l+(s.avail_in-5),p=s.next_out,H=s.output,d=p-(a-s.avail_out),m=p+(s.avail_out-257),h=o.dmax,x=o.wsize,g=o.whave,f=o.wnext,c=o.window,E=o.hold,M=o.bits,w=o.lencode,D=o.distcode,N=(1<<o.lenbits)-1,I=(1<<o.distbits)-1;t:do{M<15&&(E+=S[l++]<<M,M+=8,E+=S[l++]<<M,M+=8),O=w[E&N];e:for(;;){if(E>>>=T=O>>>24,M-=T,(T=O>>>16&255)===0)H[p++]=65535&O;else{if(!(16&T)){if((64&T)==0){O=w[(65535&O)+(E&(1<<T)-1)];continue e}if(32&T){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}A=65535&O,(T&=15)&&(M<T&&(E+=S[l++]<<M,M+=8),A+=E&(1<<T)-1,E>>>=T,M-=T),M<15&&(E+=S[l++]<<M,M+=8,E+=S[l++]<<M,M+=8),O=D[E&I];n:for(;;){if(E>>>=T=O>>>24,M-=T,!(16&(T=O>>>16&255))){if((64&T)==0){O=D[(65535&O)+(E&(1<<T)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(V=65535&O,M<(T&=15)&&(E+=S[l++]<<M,(M+=8)<T&&(E+=S[l++]<<M,M+=8)),h<(V+=E&(1<<T)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(E>>>=T,M-=T,(T=p-d)<V){if(g<(T=V-T)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(k=c,(R=0)===f){if(R+=x-T,T<A){for(A-=T;H[p++]=c[R++],--T;);R=p-V,k=H}}else if(f<T){if(R+=x+f-T,(T-=f)<A){for(A-=T;H[p++]=c[R++],--T;);if(R=0,f<A){for(A-=T=f;H[p++]=c[R++],--T;);R=p-V,k=H}}}else if(R+=f-T,T<A){for(A-=T;H[p++]=c[R++],--T;);R=p-V,k=H}for(;2<A;)H[p++]=k[R++],H[p++]=k[R++],H[p++]=k[R++],A-=3;A&&(H[p++]=k[R++],1<A&&(H[p++]=k[R++]))}else{for(R=p-V;H[p++]=H[R++],H[p++]=H[R++],H[p++]=H[R++],2<(A-=3););A&&(H[p++]=H[R++],1<A&&(H[p++]=H[R++]))}break}}break}}while(l<u&&p<m);l-=A=M>>3,E&=(1<<(M-=A<<3))-1,s.next_in=l,s.next_out=p,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=p<m?m-p+257:257-(p-m),o.hold=E,o.bits=M}},{}],49:[function(e,n,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),p=1,d=2,m=0,h=-2,x=1,g=852,f=592;function c(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function E(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(R){var k;return R&&R.state?(k=R.state,R.total_in=R.total_out=k.total=0,R.msg="",k.wrap&&(R.adler=1&k.wrap),k.mode=x,k.last=0,k.havedict=0,k.dmax=32768,k.head=null,k.hold=0,k.bits=0,k.lencode=k.lendyn=new s.Buf32(g),k.distcode=k.distdyn=new s.Buf32(f),k.sane=1,k.back=-1,m):h}function w(R){var k;return R&&R.state?((k=R.state).wsize=0,k.whave=0,k.wnext=0,M(R)):h}function D(R,k){var S,H;return R&&R.state?(H=R.state,k<0?(S=0,k=-k):(S=1+(k>>4),k<48&&(k&=15)),k&&(k<8||15<k)?h:(H.window!==null&&H.wbits!==k&&(H.window=null),H.wrap=S,H.wbits=k,w(R))):h}function N(R,k){var S,H;return R?(H=new E,(R.state=H).window=null,(S=D(R,k))!==m&&(R.state=null),S):h}var I,O,T=!0;function A(R){if(T){var k;for(I=new s.Buf32(512),O=new s.Buf32(32),k=0;k<144;)R.lens[k++]=8;for(;k<256;)R.lens[k++]=9;for(;k<280;)R.lens[k++]=7;for(;k<288;)R.lens[k++]=8;for(u(p,R.lens,0,288,I,0,R.work,{bits:9}),k=0;k<32;)R.lens[k++]=5;u(d,R.lens,0,32,O,0,R.work,{bits:5}),T=!1}R.lencode=I,R.lenbits=9,R.distcode=O,R.distbits=5}function V(R,k,S,H){var at,Z=R.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new s.Buf8(Z.wsize)),H>=Z.wsize?(s.arraySet(Z.window,k,S-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(H<(at=Z.wsize-Z.wnext)&&(at=H),s.arraySet(Z.window,k,S-H,at,Z.wnext),(H-=at)?(s.arraySet(Z.window,k,S-H,H,0),Z.wnext=H,Z.whave=Z.wsize):(Z.wnext+=at,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=at))),0}r.inflateReset=w,r.inflateReset2=D,r.inflateResetKeep=M,r.inflateInit=function(R){return N(R,15)},r.inflateInit2=N,r.inflate=function(R,k){var S,H,at,Z,nt,st,vt,X,Y,Lt,q,it,Ct,At,Rt,Vt,Ht,Qt,oe,Zt,_,pt,tt,F,L=0,W=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return h;(S=R.state).mode===12&&(S.mode=13),nt=R.next_out,at=R.output,vt=R.avail_out,Z=R.next_in,H=R.input,st=R.avail_in,X=S.hold,Y=S.bits,Lt=st,q=vt,pt=m;t:for(;;)switch(S.mode){case x:if(S.wrap===0){S.mode=13;break}for(;Y<16;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(2&S.wrap&&X===35615){W[S.check=0]=255&X,W[1]=X>>>8&255,S.check=o(S.check,W,2,0),Y=X=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",S.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",S.mode=30;break}if(Y-=4,_=8+(15&(X>>>=4)),S.wbits===0)S.wbits=_;else if(_>S.wbits){R.msg="invalid window size",S.mode=30;break}S.dmax=1<<_,R.adler=S.check=1,S.mode=512&X?10:12,Y=X=0;break;case 2:for(;Y<16;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(S.flags=X,(255&S.flags)!=8){R.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){R.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=X>>8&1),512&S.flags&&(W[0]=255&X,W[1]=X>>>8&255,S.check=o(S.check,W,2,0)),Y=X=0,S.mode=3;case 3:for(;Y<32;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.head&&(S.head.time=X),512&S.flags&&(W[0]=255&X,W[1]=X>>>8&255,W[2]=X>>>16&255,W[3]=X>>>24&255,S.check=o(S.check,W,4,0)),Y=X=0,S.mode=4;case 4:for(;Y<16;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.head&&(S.head.xflags=255&X,S.head.os=X>>8),512&S.flags&&(W[0]=255&X,W[1]=X>>>8&255,S.check=o(S.check,W,2,0)),Y=X=0,S.mode=5;case 5:if(1024&S.flags){for(;Y<16;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.length=X,S.head&&(S.head.extra_len=X),512&S.flags&&(W[0]=255&X,W[1]=X>>>8&255,S.check=o(S.check,W,2,0)),Y=X=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(st<(it=S.length)&&(it=st),it&&(S.head&&(_=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),s.arraySet(S.head.extra,H,Z,it,_)),512&S.flags&&(S.check=o(S.check,H,it,Z)),st-=it,Z+=it,S.length-=it),S.length))break t;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(st===0)break t;for(it=0;_=H[Z+it++],S.head&&_&&S.length<65536&&(S.head.name+=String.fromCharCode(_)),_&&it<st;);if(512&S.flags&&(S.check=o(S.check,H,it,Z)),st-=it,Z+=it,_)break t}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(st===0)break t;for(it=0;_=H[Z+it++],S.head&&_&&S.length<65536&&(S.head.comment+=String.fromCharCode(_)),_&&it<st;);if(512&S.flags&&(S.check=o(S.check,H,it,Z)),st-=it,Z+=it,_)break t}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;Y<16;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(X!==(65535&S.check)){R.msg="header crc mismatch",S.mode=30;break}Y=X=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),R.adler=S.check=0,S.mode=12;break;case 10:for(;Y<32;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}R.adler=S.check=c(X),Y=X=0,S.mode=11;case 11:if(S.havedict===0)return R.next_out=nt,R.avail_out=vt,R.next_in=Z,R.avail_in=st,S.hold=X,S.bits=Y,2;R.adler=S.check=1,S.mode=12;case 12:if(k===5||k===6)break t;case 13:if(S.last){X>>>=7&Y,Y-=7&Y,S.mode=27;break}for(;Y<3;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}switch(S.last=1&X,Y-=1,3&(X>>>=1)){case 0:S.mode=14;break;case 1:if(A(S),S.mode=20,k!==6)break;X>>>=2,Y-=2;break t;case 2:S.mode=17;break;case 3:R.msg="invalid block type",S.mode=30}X>>>=2,Y-=2;break;case 14:for(X>>>=7&Y,Y-=7&Y;Y<32;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&X,Y=X=0,S.mode=15,k===6)break t;case 15:S.mode=16;case 16:if(it=S.length){if(st<it&&(it=st),vt<it&&(it=vt),it===0)break t;s.arraySet(at,H,Z,it,nt),st-=it,Z+=it,vt-=it,nt+=it,S.length-=it;break}S.mode=12;break;case 17:for(;Y<14;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(S.nlen=257+(31&X),X>>>=5,Y-=5,S.ndist=1+(31&X),X>>>=5,Y-=5,S.ncode=4+(15&X),X>>>=4,Y-=4,286<S.nlen||30<S.ndist){R.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;Y<3;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.lens[ot[S.have++]]=7&X,X>>>=3,Y-=3}for(;S.have<19;)S.lens[ot[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,tt={bits:S.lenbits},pt=u(0,S.lens,0,19,S.lencode,0,S.work,tt),S.lenbits=tt.bits,pt){R.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;Vt=(L=S.lencode[X&(1<<S.lenbits)-1])>>>16&255,Ht=65535&L,!((Rt=L>>>24)<=Y);){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(Ht<16)X>>>=Rt,Y-=Rt,S.lens[S.have++]=Ht;else{if(Ht===16){for(F=Rt+2;Y<F;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(X>>>=Rt,Y-=Rt,S.have===0){R.msg="invalid bit length repeat",S.mode=30;break}_=S.lens[S.have-1],it=3+(3&X),X>>>=2,Y-=2}else if(Ht===17){for(F=Rt+3;Y<F;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}Y-=Rt,_=0,it=3+(7&(X>>>=Rt)),X>>>=3,Y-=3}else{for(F=Rt+7;Y<F;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}Y-=Rt,_=0,it=11+(127&(X>>>=Rt)),X>>>=7,Y-=7}if(S.have+it>S.nlen+S.ndist){R.msg="invalid bit length repeat",S.mode=30;break}for(;it--;)S.lens[S.have++]=_}}if(S.mode===30)break;if(S.lens[256]===0){R.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,tt={bits:S.lenbits},pt=u(p,S.lens,0,S.nlen,S.lencode,0,S.work,tt),S.lenbits=tt.bits,pt){R.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,tt={bits:S.distbits},pt=u(d,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,tt),S.distbits=tt.bits,pt){R.msg="invalid distances set",S.mode=30;break}if(S.mode=20,k===6)break t;case 20:S.mode=21;case 21:if(6<=st&&258<=vt){R.next_out=nt,R.avail_out=vt,R.next_in=Z,R.avail_in=st,S.hold=X,S.bits=Y,l(R,q),nt=R.next_out,at=R.output,vt=R.avail_out,Z=R.next_in,H=R.input,st=R.avail_in,X=S.hold,Y=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;Vt=(L=S.lencode[X&(1<<S.lenbits)-1])>>>16&255,Ht=65535&L,!((Rt=L>>>24)<=Y);){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(Vt&&(240&Vt)==0){for(Qt=Rt,oe=Vt,Zt=Ht;Vt=(L=S.lencode[Zt+((X&(1<<Qt+oe)-1)>>Qt)])>>>16&255,Ht=65535&L,!(Qt+(Rt=L>>>24)<=Y);){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}X>>>=Qt,Y-=Qt,S.back+=Qt}if(X>>>=Rt,Y-=Rt,S.back+=Rt,S.length=Ht,Vt===0){S.mode=26;break}if(32&Vt){S.back=-1,S.mode=12;break}if(64&Vt){R.msg="invalid literal/length code",S.mode=30;break}S.extra=15&Vt,S.mode=22;case 22:if(S.extra){for(F=S.extra;Y<F;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.length+=X&(1<<S.extra)-1,X>>>=S.extra,Y-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;Vt=(L=S.distcode[X&(1<<S.distbits)-1])>>>16&255,Ht=65535&L,!((Rt=L>>>24)<=Y);){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if((240&Vt)==0){for(Qt=Rt,oe=Vt,Zt=Ht;Vt=(L=S.distcode[Zt+((X&(1<<Qt+oe)-1)>>Qt)])>>>16&255,Ht=65535&L,!(Qt+(Rt=L>>>24)<=Y);){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}X>>>=Qt,Y-=Qt,S.back+=Qt}if(X>>>=Rt,Y-=Rt,S.back+=Rt,64&Vt){R.msg="invalid distance code",S.mode=30;break}S.offset=Ht,S.extra=15&Vt,S.mode=24;case 24:if(S.extra){for(F=S.extra;Y<F;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}S.offset+=X&(1<<S.extra)-1,X>>>=S.extra,Y-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){R.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if(vt===0)break t;if(it=q-vt,S.offset>it){if((it=S.offset-it)>S.whave&&S.sane){R.msg="invalid distance too far back",S.mode=30;break}Ct=it>S.wnext?(it-=S.wnext,S.wsize-it):S.wnext-it,it>S.length&&(it=S.length),At=S.window}else At=at,Ct=nt-S.offset,it=S.length;for(vt<it&&(it=vt),vt-=it,S.length-=it;at[nt++]=At[Ct++],--it;);S.length===0&&(S.mode=21);break;case 26:if(vt===0)break t;at[nt++]=S.length,vt--,S.mode=21;break;case 27:if(S.wrap){for(;Y<32;){if(st===0)break t;st--,X|=H[Z++]<<Y,Y+=8}if(q-=vt,R.total_out+=q,S.total+=q,q&&(R.adler=S.check=S.flags?o(S.check,at,q,nt-q):a(S.check,at,q,nt-q)),q=vt,(S.flags?X:c(X))!==S.check){R.msg="incorrect data check",S.mode=30;break}Y=X=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;Y<32;){if(st===0)break t;st--,X+=H[Z++]<<Y,Y+=8}if(X!==(4294967295&S.total)){R.msg="incorrect length check",S.mode=30;break}Y=X=0}S.mode=29;case 29:pt=1;break t;case 30:pt=-3;break t;case 31:return-4;case 32:default:return h}return R.next_out=nt,R.avail_out=vt,R.next_in=Z,R.avail_in=st,S.hold=X,S.bits=Y,(S.wsize||q!==R.avail_out&&S.mode<30&&(S.mode<27||k!==4))&&V(R,R.output,R.next_out,q-R.avail_out)?(S.mode=31,-4):(Lt-=R.avail_in,q-=R.avail_out,R.total_in+=Lt,R.total_out+=q,S.total+=q,S.wrap&&q&&(R.adler=S.check=S.flags?o(S.check,at,q,R.next_out-q):a(S.check,at,q,R.next_out-q)),R.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(Lt==0&&q===0||k===4)&&pt===m&&(pt=-5),pt)},r.inflateEnd=function(R){if(!R||!R.state)return h;var k=R.state;return k.window&&(k.window=null),R.state=null,m},r.inflateGetHeader=function(R,k){var S;return R&&R.state?(2&(S=R.state).wrap)==0?h:((S.head=k).done=!1,m):h},r.inflateSetDictionary=function(R,k){var S,H=k.length;return R&&R.state?(S=R.state).wrap!==0&&S.mode!==11?h:S.mode===11&&a(1,k,H,0)!==S.check?-3:V(R,k,H,H)?(S.mode=31,-4):(S.havedict=1,m):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(p,d,m,h,x,g,f,c){var E,M,w,D,N,I,O,T,A,V=c.bits,R=0,k=0,S=0,H=0,at=0,Z=0,nt=0,st=0,vt=0,X=0,Y=null,Lt=0,q=new s.Buf16(16),it=new s.Buf16(16),Ct=null,At=0;for(R=0;R<=15;R++)q[R]=0;for(k=0;k<h;k++)q[d[m+k]]++;for(at=V,H=15;1<=H&&q[H]===0;H--);if(H<at&&(at=H),H===0)return x[g++]=20971520,x[g++]=20971520,c.bits=1,0;for(S=1;S<H&&q[S]===0;S++);for(at<S&&(at=S),R=st=1;R<=15;R++)if(st<<=1,(st-=q[R])<0)return-1;if(0<st&&(p===0||H!==1))return-1;for(it[1]=0,R=1;R<15;R++)it[R+1]=it[R]+q[R];for(k=0;k<h;k++)d[m+k]!==0&&(f[it[d[m+k]]++]=k);if(I=p===0?(Y=Ct=f,19):p===1?(Y=a,Lt-=257,Ct=o,At-=257,256):(Y=l,Ct=u,-1),R=S,N=g,nt=k=X=0,w=-1,D=(vt=1<<(Z=at))-1,p===1&&852<vt||p===2&&592<vt)return 1;for(;;){for(O=R-nt,A=f[k]<I?(T=0,f[k]):f[k]>I?(T=Ct[At+f[k]],Y[Lt+f[k]]):(T=96,0),E=1<<R-nt,S=M=1<<Z;x[N+(X>>nt)+(M-=E)]=O<<24|T<<16|A|0,M!==0;);for(E=1<<R-1;X&E;)E>>=1;if(E!==0?(X&=E-1,X+=E):X=0,k++,--q[R]==0){if(R===H)break;R=d[m+f[k]]}if(at<R&&(X&D)!==w){for(nt===0&&(nt=at),N+=S,st=1<<(Z=R-nt);Z+nt<H&&!((st-=q[Z+nt])<=0);)Z++,st<<=1;if(vt+=1<<Z,p===1&&852<vt||p===2&&592<vt)return 1;x[w=X&D]=at<<24|Z<<16|N-g|0}}return X!==0&&(x[N+X]=R-nt<<24|64<<16|0),c.bits=at,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),a=0,o=1;function l(L){for(var W=L.length;0<=--W;)L[W]=0}var u=0,p=29,d=256,m=d+1+p,h=30,x=19,g=2*m+1,f=15,c=16,E=7,M=256,w=16,D=17,N=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],O=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],V=new Array(2*(m+2));l(V);var R=new Array(2*h);l(R);var k=new Array(512);l(k);var S=new Array(256);l(S);var H=new Array(p);l(H);var at,Z,nt,st=new Array(h);function vt(L,W,ot,C,b){this.static_tree=L,this.extra_bits=W,this.extra_base=ot,this.elems=C,this.max_length=b,this.has_stree=L&&L.length}function X(L,W){this.dyn_tree=L,this.max_code=0,this.stat_desc=W}function Y(L){return L<256?k[L]:k[256+(L>>>7)]}function Lt(L,W){L.pending_buf[L.pending++]=255&W,L.pending_buf[L.pending++]=W>>>8&255}function q(L,W,ot){L.bi_valid>c-ot?(L.bi_buf|=W<<L.bi_valid&65535,Lt(L,L.bi_buf),L.bi_buf=W>>c-L.bi_valid,L.bi_valid+=ot-c):(L.bi_buf|=W<<L.bi_valid&65535,L.bi_valid+=ot)}function it(L,W,ot){q(L,ot[2*W],ot[2*W+1])}function Ct(L,W){for(var ot=0;ot|=1&L,L>>>=1,ot<<=1,0<--W;);return ot>>>1}function At(L,W,ot){var C,b,z=new Array(f+1),J=0;for(C=1;C<=f;C++)z[C]=J=J+ot[C-1]<<1;for(b=0;b<=W;b++){var j=L[2*b+1];j!==0&&(L[2*b]=Ct(z[j]++,j))}}function Rt(L){var W;for(W=0;W<m;W++)L.dyn_ltree[2*W]=0;for(W=0;W<h;W++)L.dyn_dtree[2*W]=0;for(W=0;W<x;W++)L.bl_tree[2*W]=0;L.dyn_ltree[2*M]=1,L.opt_len=L.static_len=0,L.last_lit=L.matches=0}function Vt(L){8<L.bi_valid?Lt(L,L.bi_buf):0<L.bi_valid&&(L.pending_buf[L.pending++]=L.bi_buf),L.bi_buf=0,L.bi_valid=0}function Ht(L,W,ot,C){var b=2*W,z=2*ot;return L[b]<L[z]||L[b]===L[z]&&C[W]<=C[ot]}function Qt(L,W,ot){for(var C=L.heap[ot],b=ot<<1;b<=L.heap_len&&(b<L.heap_len&&Ht(W,L.heap[b+1],L.heap[b],L.depth)&&b++,!Ht(W,C,L.heap[b],L.depth));)L.heap[ot]=L.heap[b],ot=b,b<<=1;L.heap[ot]=C}function oe(L,W,ot){var C,b,z,J,j=0;if(L.last_lit!==0)for(;C=L.pending_buf[L.d_buf+2*j]<<8|L.pending_buf[L.d_buf+2*j+1],b=L.pending_buf[L.l_buf+j],j++,C===0?it(L,b,W):(it(L,(z=S[b])+d+1,W),(J=I[z])!==0&&q(L,b-=H[z],J),it(L,z=Y(--C),ot),(J=O[z])!==0&&q(L,C-=st[z],J)),j<L.last_lit;);it(L,M,W)}function Zt(L,W){var ot,C,b,z=W.dyn_tree,J=W.stat_desc.static_tree,j=W.stat_desc.has_stree,et=W.stat_desc.elems,Pt=-1;for(L.heap_len=0,L.heap_max=g,ot=0;ot<et;ot++)z[2*ot]!==0?(L.heap[++L.heap_len]=Pt=ot,L.depth[ot]=0):z[2*ot+1]=0;for(;L.heap_len<2;)z[2*(b=L.heap[++L.heap_len]=Pt<2?++Pt:0)]=1,L.depth[b]=0,L.opt_len--,j&&(L.static_len-=J[2*b+1]);for(W.max_code=Pt,ot=L.heap_len>>1;1<=ot;ot--)Qt(L,z,ot);for(b=et;ot=L.heap[1],L.heap[1]=L.heap[L.heap_len--],Qt(L,z,1),C=L.heap[1],L.heap[--L.heap_max]=ot,L.heap[--L.heap_max]=C,z[2*b]=z[2*ot]+z[2*C],L.depth[b]=(L.depth[ot]>=L.depth[C]?L.depth[ot]:L.depth[C])+1,z[2*ot+1]=z[2*C+1]=b,L.heap[1]=b++,Qt(L,z,1),2<=L.heap_len;);L.heap[--L.heap_max]=L.heap[1],(function(xt,Dt){var te,St,It,Ot,$t,Bt,Yt=Dt.dyn_tree,ee=Dt.max_code,ge=Dt.stat_desc.static_tree,$=Dt.stat_desc.has_stree,Ut=Dt.stat_desc.extra_bits,dt=Dt.stat_desc.extra_base,_t=Dt.stat_desc.max_length,bt=0;for(Ot=0;Ot<=f;Ot++)xt.bl_count[Ot]=0;for(Yt[2*xt.heap[xt.heap_max]+1]=0,te=xt.heap_max+1;te<g;te++)_t<(Ot=Yt[2*Yt[2*(St=xt.heap[te])+1]+1]+1)&&(Ot=_t,bt++),Yt[2*St+1]=Ot,ee<St||(xt.bl_count[Ot]++,$t=0,dt<=St&&($t=Ut[St-dt]),Bt=Yt[2*St],xt.opt_len+=Bt*(Ot+$t),$&&(xt.static_len+=Bt*(ge[2*St+1]+$t)));if(bt!==0){do{for(Ot=_t-1;xt.bl_count[Ot]===0;)Ot--;xt.bl_count[Ot]--,xt.bl_count[Ot+1]+=2,xt.bl_count[_t]--,bt-=2}while(0<bt);for(Ot=_t;Ot!==0;Ot--)for(St=xt.bl_count[Ot];St!==0;)ee<(It=xt.heap[--te])||(Yt[2*It+1]!==Ot&&(xt.opt_len+=(Ot-Yt[2*It+1])*Yt[2*It],Yt[2*It+1]=Ot),St--)}})(L,W),At(z,Pt,L.bl_count)}function _(L,W,ot){var C,b,z=-1,J=W[1],j=0,et=7,Pt=4;for(J===0&&(et=138,Pt=3),W[2*(ot+1)+1]=65535,C=0;C<=ot;C++)b=J,J=W[2*(C+1)+1],++j<et&&b===J||(j<Pt?L.bl_tree[2*b]+=j:b!==0?(b!==z&&L.bl_tree[2*b]++,L.bl_tree[2*w]++):j<=10?L.bl_tree[2*D]++:L.bl_tree[2*N]++,z=b,Pt=(j=0)===J?(et=138,3):b===J?(et=6,3):(et=7,4))}function pt(L,W,ot){var C,b,z=-1,J=W[1],j=0,et=7,Pt=4;for(J===0&&(et=138,Pt=3),C=0;C<=ot;C++)if(b=J,J=W[2*(C+1)+1],!(++j<et&&b===J)){if(j<Pt)for(;it(L,b,L.bl_tree),--j!=0;);else b!==0?(b!==z&&(it(L,b,L.bl_tree),j--),it(L,w,L.bl_tree),q(L,j-3,2)):j<=10?(it(L,D,L.bl_tree),q(L,j-3,3)):(it(L,N,L.bl_tree),q(L,j-11,7));z=b,Pt=(j=0)===J?(et=138,3):b===J?(et=6,3):(et=7,4)}}l(st);var tt=!1;function F(L,W,ot,C){q(L,(u<<1)+(C?1:0),3),(function(b,z,J,j){Vt(b),Lt(b,J),Lt(b,~J),s.arraySet(b.pending_buf,b.window,z,J,b.pending),b.pending+=J})(L,W,ot)}r._tr_init=function(L){tt||((function(){var W,ot,C,b,z,J=new Array(f+1);for(b=C=0;b<p-1;b++)for(H[b]=C,W=0;W<1<<I[b];W++)S[C++]=b;for(S[C-1]=b,b=z=0;b<16;b++)for(st[b]=z,W=0;W<1<<O[b];W++)k[z++]=b;for(z>>=7;b<h;b++)for(st[b]=z<<7,W=0;W<1<<O[b]-7;W++)k[256+z++]=b;for(ot=0;ot<=f;ot++)J[ot]=0;for(W=0;W<=143;)V[2*W+1]=8,W++,J[8]++;for(;W<=255;)V[2*W+1]=9,W++,J[9]++;for(;W<=279;)V[2*W+1]=7,W++,J[7]++;for(;W<=287;)V[2*W+1]=8,W++,J[8]++;for(At(V,m+1,J),W=0;W<h;W++)R[2*W+1]=5,R[2*W]=Ct(W,5);at=new vt(V,I,d+1,m,f),Z=new vt(R,O,0,h,f),nt=new vt(new Array(0),T,0,x,E)})(),tt=!0),L.l_desc=new X(L.dyn_ltree,at),L.d_desc=new X(L.dyn_dtree,Z),L.bl_desc=new X(L.bl_tree,nt),L.bi_buf=0,L.bi_valid=0,Rt(L)},r._tr_stored_block=F,r._tr_flush_block=function(L,W,ot,C){var b,z,J=0;0<L.level?(L.strm.data_type===2&&(L.strm.data_type=(function(j){var et,Pt=4093624447;for(et=0;et<=31;et++,Pt>>>=1)if(1&Pt&&j.dyn_ltree[2*et]!==0)return a;if(j.dyn_ltree[18]!==0||j.dyn_ltree[20]!==0||j.dyn_ltree[26]!==0)return o;for(et=32;et<d;et++)if(j.dyn_ltree[2*et]!==0)return o;return a})(L)),Zt(L,L.l_desc),Zt(L,L.d_desc),J=(function(j){var et;for(_(j,j.dyn_ltree,j.l_desc.max_code),_(j,j.dyn_dtree,j.d_desc.max_code),Zt(j,j.bl_desc),et=x-1;3<=et&&j.bl_tree[2*A[et]+1]===0;et--);return j.opt_len+=3*(et+1)+5+5+4,et})(L),b=L.opt_len+3+7>>>3,(z=L.static_len+3+7>>>3)<=b&&(b=z)):b=z=ot+5,ot+4<=b&&W!==-1?F(L,W,ot,C):L.strategy===4||z===b?(q(L,2+(C?1:0),3),oe(L,V,R)):(q(L,4+(C?1:0),3),(function(j,et,Pt,xt){var Dt;for(q(j,et-257,5),q(j,Pt-1,5),q(j,xt-4,4),Dt=0;Dt<xt;Dt++)q(j,j.bl_tree[2*A[Dt]+1],3);pt(j,j.dyn_ltree,et-1),pt(j,j.dyn_dtree,Pt-1)})(L,L.l_desc.max_code+1,L.d_desc.max_code+1,J+1),oe(L,L.dyn_ltree,L.dyn_dtree)),Rt(L),C&&Vt(L)},r._tr_tally=function(L,W,ot){return L.pending_buf[L.d_buf+2*L.last_lit]=W>>>8&255,L.pending_buf[L.d_buf+2*L.last_lit+1]=255&W,L.pending_buf[L.l_buf+L.last_lit]=255&ot,L.last_lit++,W===0?L.dyn_ltree[2*ot]++:(L.matches++,W--,L.dyn_ltree[2*(S[ot]+d+1)]++,L.dyn_dtree[2*Y(W)]++),L.last_lit===L.lit_bufsize-1},r._tr_align=function(L){q(L,2,3),it(L,M,V),(function(W){W.bi_valid===16?(Lt(W,W.bi_buf),W.bi_buf=0,W.bi_valid=0):8<=W.bi_valid&&(W.pending_buf[W.pending++]=255&W.bi_buf,W.bi_buf>>=8,W.bi_valid-=8)})(L)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(a,o){if(!a.setImmediate){var l,u,p,d,m=1,h={},x=!1,g=a.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(a);f=f&&f.setTimeout?f:a,l={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){E(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,D=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=D,w}})()?(d="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",M,!1):a.attachEvent("onmessage",M),function(w){a.postMessage(d+w,"*")}):a.MessageChannel?((p=new MessageChannel).port1.onmessage=function(w){E(w.data)},function(w){p.port2.postMessage(w)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(w){var D=g.createElement("script");D.onreadystatechange=function(){E(w),D.onreadystatechange=null,u.removeChild(D),D=null},u.appendChild(D)}):function(w){setTimeout(E,0,w)},f.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var D=new Array(arguments.length-1),N=0;N<D.length;N++)D[N]=arguments[N+1];var I={callback:w,args:D};return h[m]=I,l(m),m++},f.clearImmediate=c}function c(w){delete h[w]}function E(w){if(x)setTimeout(E,0,w);else{var D=h[w];if(D){x=!0;try{(function(N){var I=N.callback,O=N.args;switch(O.length){case 0:I();break;case 1:I(O[0]);break;case 2:I(O[0],O[1]);break;case 3:I(O[0],O[1],O[2]);break;default:I.apply(o,O)}})(D)}finally{c(w),x=!1}}}}function M(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(d)===0&&E(+w.data.slice(d.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof ts<"u"?ts:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(oa)),oa.exports}var Rg=Cg();const Pg=Ag(Rg),Dg={printer_name:"Bambu Lab A1",filament:"Bambu PLA Basic @BBL A1",printableWidth:256,printableDepth:256,printableHeight:256,printableArea:["0x0","256x0","256x256","0x256"],printerSettingsId:"Bambu Lab A1 0.4 nozzle",printSettingsId:"0.20mm Standard @BBL A1",compression:"standard",metadata:{Application:"BambuStudio-02.04.00.70",ApplicationTitle:"Exported 3D Model"}},Lg={standard:"DEFLATE",none:"STORE"};async function Ig(i,t){const n=new Pg,r=Object.assign({},Dg,t),s=Lg[r.compression],a=[],o=[];gc(i,a,o);const l=Ug(a),u=Ng(l),p=Fg(u,l,r),d=Og(1,a,p,r),m=kg(a),h=Bg(1,a),x=zg(o,r);return n.file("_rels/.rels",Cl({id:"rel-1",target:"/3D/3dmodel.model"})),n.file("3D/3dmodel.model",d),n.file("3D/_rels/3dmodel.model.rels",Cl({id:"rel-1",target:"/3D/Objects/object-1.model"})),n.file("3D/Objects/object-1.model",m),n.file("Metadata/model_settings.config",h),n.file("Metadata/project_settings.config",x),n.file("[Content_Types].xml",Vg()),await n.generateAsync({type:"blob",mimeType:"application/vnd.ms-package.3dmanufacturing-3dmodel+xml",compression:s})}function gc(i,t,e){if(i.updateMatrixWorld(!0),i.type==="Mesh"){const n=i,r=n.geometry,s=r.attributes.position,a=r.index;let o=null;if(n.material){const h=new ve;"color"in n.material&&n.material.color?h.copy(n.material.color):h.set(8421504);const x=e.find(g=>g.color.r===h.r&&g.color.g===h.g&&g.color.b===h.b);if(x)o=x;else{const g=e.length+1;o={id:e.length,color:h,name:n.name?`${n.name}_material`:`material_${e.length}`,extruder:g},e.push(o)}}const l=t.length,u={id:l,vertices:[],triangles:[],material:o,name:n.name||`Default-${l}`},p=new Map,d=n.matrixWorld,m=h=>{const x=new ct;x.fromBufferAttribute(s,h),x.applyMatrix4(d);const g=`${x.x},${x.y},${x.z}`;return p.has(g)||(p.set(g,u.vertices.length),u.vertices.push({x:x.x,y:x.y,z:x.z})),p.get(g)};if(a)for(let h=0;h<a.count;h+=3){const x=m(a.getX(h)),g=m(a.getX(h+1)),f=m(a.getX(h+2));u.triangles.push({v1:x,v2:g,v3:f})}else for(let h=0;h<s.count;h+=3){const x=m(h),g=m(h+1),f=m(h+2);u.triangles.push({v1:x,v2:g,v3:f})}t.push(u)}i.children.forEach(n=>{gc(n,t,e)})}function Ug(i){if(i.length===0)return{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};const t=i[0].vertices[0]||{x:0,y:0,z:0},e={x:t.x,y:t.y,z:t.z},n={x:t.x,y:t.y,z:t.z};for(const r of i)for(const s of r.vertices)e.x=Math.min(e.x,s.x),e.y=Math.min(e.y,s.y),e.z=Math.min(e.z,s.z),n.x=Math.max(n.x,s.x),n.y=Math.max(n.y,s.y),n.z=Math.max(n.z,s.z);return{min:e,max:n}}function Ng(i){return{x:(i.min.x+i.max.x)/2,y:(i.min.y+i.max.y)/2,z:(i.min.z+i.max.z)/2}}function Fg(i,t,e){const n={x:e.printableWidth/2,y:e.printableDepth/2,z:0},r={x:n.x-i.x,y:n.y-i.y,z:n.z-t.min.z};return`1 0 0 0 1 0 0 0 1 ${r.x.toFixed(4)} ${r.y.toFixed(4)} ${r.z.toFixed(4)}`}function Og(i,t,e,n){const r=[],s=n.metadata;r.push({"@_name":"CreationDate","#text":new Date().toString()});for(const l in s)r.push({"@_name":l,"#text":s[l]});const a={model:{"@_unit":"millimeter","@_xml:lang":"en-US","@_xmlns":"http://schemas.microsoft.com/3dmanufacturing/core/2015/02","@_xmlns:slic3rpe":"http://schemas.slic3r.org/3mf/2017/06","@_xmlns:p":"http://schemas.microsoft.com/3dmanufacturing/production/2015/06","@_requiredextensions":"p",metadata:r,resources:{object:{"@_id":`${i}`,"@_p:uuid":cs(),"@_type":"model",components:{component:t.map(l=>({"@_p:path":`/3D/Objects/object-${i}.model`,"@_objectid":l.id.toString()}))}}},build:{"@_p:uuid":`${cs()}1`,item:{"@_objectid":`${i}`,"@_p:uuid":`${cs()}2`,"@_transform":e,"@_printable":"1"}}}};return`<?xml version="1.0" encoding="UTF-8"?>
${new Vn({attributeNamePrefix:"@_",ignoreAttributes:!1,format:!0,indentBy:"  "}).build(a)}`}function kg(i){const e={model:{"@_unit":"millimeter","@_xml:lang":"en-US","@_xmlns":"http://schemas.microsoft.com/3dmanufacturing/core/2015/02","@_xmlns:p":"http://schemas.microsoft.com/3dmanufacturing/production/2015/06",resources:i.map(r=>({object:{"@_id":r.id.toString(),"@_p:uuid":cs(),"@_type":"model",mesh:{vertices:{vertex:r.vertices.map(s=>({"@_x":s.x.toFixed(7),"@_y":s.y.toFixed(7),"@_z":s.z.toFixed(7)}))},triangles:{triangle:r.triangles.map(s=>({"@_v1":s.v1,"@_v2":s.v2,"@_v3":s.v3}))}}}})),build:{}}};return`<?xml version="1.0" encoding="UTF-8"?>
${new Vn({attributeNamePrefix:"@_",ignoreAttributes:!1,format:!0,indentBy:"  "}).build(e)}`}function Bg(i,t){const e=t.map(n=>{const r=n.material?n.material.extruder:1;return`    <part id="${n.id}" subtype="normal_part">
      <metadata key="name" value="${n.name}"/>
      <metadata key="extruder" value="${r}"/>
      <mesh_stat edges_fixed="0" degenerate_facets="0" facets_removed="0" facets_reversed="0" backwards_edges="0"/>
    </part>`}).join(`
`);return`<?xml version="1.0" encoding="UTF-8"?>
<config>
  <object id="${i}">
    <metadata key="name" value="Exported3DModel.3mf"/>
    <metadata key="extruder" value="1"/>
    <metadata key="thumbnail_file" value=""/>
${e}
  </object>
  <plate>
    <metadata key="plater_id" value="1"/>
    <metadata key="plater_name" value="plate-1"/>
    <model_instance>
      <metadata key="object_id" value="${i}"/>
      <metadata key="instance_id" value="0"/>
    </model_instance>
  </plate>
  <assemble>
    <assemble_item object_id="${i}" instance_id="0" offset="0 0 0"/>
  </assemble>
</config>`}function zg(i,t){const e=i.map(r=>`#${r.color.getHexString()}`);for(;e.length<2;)e.push("#FFFFFF");const n={printable_area:t.printableArea,printable_height:t.printableHeight.toString(),bed_exclude_area:[],filament_colour:e,filament_settings_id:Array.from({length:e.length}).fill(t.filament),filament_diameter:Array.from({length:e.length}).fill("1.75"),filament_is_support:Array.from({length:e.length}).fill("0"),printer_model:t.printer_name,layer_height:"0.2",wall_loops:"2",sparse_infill_density:"15%",printer_settings_id:t.printerSettingsId,printer_variant:"0.4",nozzle_diameter:["0.4"],enable_support:"0",support_type:"normal(auto)",print_settings_id:t.printSettingsId};return JSON.stringify(n)}function Vg(){return`<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" />
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml" />
  <Default Extension="png" ContentType="image/png" />
  <Default Extension="gcode" ContentType="text/x.gcode"/>
</Types>`}function Cl(i){return`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rel-${i.id}" Target="${i.target}" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>`}function cs(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const t=Math.random()*16|0;return(i==="x"?t:t&3|8).toString(16)})}const fo=await gg();fo.setup();const{Manifold:Hg}=fo,{cube:nv,sphere:iv,CrossSection:Gg}=fo,Za=20,Rl=1*Za,Pl=8,vr=[[0,0],[10,0],[10,8],[7,8],[7,3],[3,3],[3,8],[0,8],[0,0]].map(i=>[i[0]*Za,i[1]*Za]),Ka=vr[1],rr=vr[2],Ja=vr[3],Dl=[Ka[0]-rr[0],Ka[1]-rr[1]],Ll=[Ja[0]-rr[0],Ja[1]-rr[1]],Il=Math.atan2(Dl[1],Dl[0]),Wg=Math.atan2(Ll[1],Ll[0]);let vc=[];for(let i=0;i<=Pl;i++){const t=i/Pl,e=Il+t*(Wg-Il),n=rr[0]+Rl*Math.cos(e),r=rr[1]+Rl*Math.sin(e);vc.push([n,r])}const Xg=[vr[0],Ka,...vc,Ja,...vr.slice(4)],$g=[Xg],jg=new Gg($g),Yg=jg.extrude(100),qg=Hg.sphere(60,100),Zg=Yg.subtract(qg),xc=Zg.getMesh(),_s=new ii;_s.setAttribute("position",new cn(xc.vertProperties,3));_s.setIndex(new cn(xc.triVerts,1));_s.computeVertexNormals();const Kg=new qh({color:65280,metalness:.5,roughness:.5,flatShading:!0}),yc=new Mn(_s,Kg),bc=document.querySelector("canvas.webgl"),wr=new $h;wr.add(yc);const Sc=new td(16777215,1);Sc.position.set(300,300,300);wr.add(Sc);wr.add(new ed(4210752,.5));const Sn={width:window.innerWidth,height:window.innerHeight},Ei=new ln(75,Sn.width/Sn.height,.1,1e3);Ei.position.set(200,200,300);Ei.lookAt(0,0,0);wr.add(Ei);const Ec=new G_(Ei,bc);Ec.enableDamping=!0;const xr=new V_({canvas:bc});xr.setSize(Sn.width,Sn.height);xr.setPixelRatio(Math.min(window.devicePixelRatio,2));window.addEventListener("resize",()=>{Sn.width=window.innerWidth,Sn.height=window.innerHeight,Ei.aspect=Sn.width/Sn.height,Ei.updateProjectionMatrix(),xr.setSize(Sn.width,Sn.height),xr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Jg=new ho;Jg.add({export3mf:async()=>{const i=await Ig(yc),t=URL.createObjectURL(i),e=document.createElement("a");e.href=t,e.download="model.3mf",e.click(),URL.revokeObjectURL(t)}},"export3mf").name("Export .3MF");function Mc(){Ec.update(),xr.render(wr,Ei),requestAnimationFrame(Mc)}Mc();
//# sourceMappingURL=index-D2w9lcCt.js.map
