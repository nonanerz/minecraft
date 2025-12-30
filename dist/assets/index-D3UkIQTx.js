(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="160",kc=0,Ho=1,Hc=2,zl=1,kl=2,Pn=3,Kn=0,ze=1,_n=2,qn=0,zi=1,Go=2,Vo=3,Wo=4,Gc=5,ai=100,Vc=101,Wc=102,Xo=103,qo=104,Xc=200,qc=201,Yc=202,jc=203,io=204,so=205,Kc=206,$c=207,Zc=208,Jc=209,Qc=210,th=211,eh=212,nh=213,ih=214,sh=0,rh=1,oh=2,sr=3,ah=4,lh=5,ch=6,hh=7,vo=0,uh=1,dh=2,Yn=0,fh=1,ph=2,mh=3,gh=4,_h=5,vh=6,Hl=300,Hi=301,Gi=302,ro=303,oo=304,fr=306,ao=1e3,rn=1001,lo=1002,Ee=1003,Yo=1004,xr=1005,Ke=1006,yh=1007,vs=1008,jn=1009,xh=1010,Mh=1011,yo=1012,Gl=1013,Wn=1014,Xn=1015,ys=1016,Vl=1017,Wl=1018,ui=1020,Sh=1021,on=1023,Eh=1024,bh=1025,di=1026,Vi=1027,wh=1028,Xl=1029,Th=1030,ql=1031,Yl=1033,Mr=33776,Sr=33777,Er=33778,br=33779,jo=35840,Ko=35841,$o=35842,Zo=35843,jl=36196,Jo=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,wr=36492,pa=36494,ma=36495,Ah=36283,ga=36284,_a=36285,va=36286,Kl=3e3,fi=3001,Ch=3200,Rh=3201,xo=0,Lh=1,Ze="",Me="srgb",Nn="srgb-linear",Mo="display-p3",pr="display-p3-linear",rr="linear",ne="srgb",or="rec709",ar="p3",_i=7680,ya=519,Ph=512,Ih=513,Dh=514,$l=515,Nh=516,Uh=517,Fh=518,Oh=519,xa=35044,Ma="300 es",co=1035,Dn=2e3,lr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const fs=Math.PI/180,xs=180/Math.PI;function Ki(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[r&255]+Ae[r>>8&255]+Ae[r>>16&255]+Ae[r>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Fe(r,t,e){return Math.max(t,Math.min(e,r))}function So(r,t){return(r%t+t)%t}function Bh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function zh(r,t,e){return r!==t?(e-r)/(t-r):0}function ps(r,t,e){return(1-e)*r+e*t}function kh(r,t,e,n){return ps(r,t,1-Math.exp(-e*n))}function Hh(r,t=1){return t-Math.abs(So(r,t*2)-t)}function Gh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Vh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Wh(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Xh(r,t){return r+Math.random()*(t-r)}function qh(r){return r*(.5-Math.random())}function Yh(r){r!==void 0&&(Sa=r);let t=Sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jh(r){return r*fs}function Kh(r){return r*xs}function ho(r){return(r&r-1)===0&&r!==0}function $h(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zh(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vn={DEG2RAD:fs,RAD2DEG:xs,generateUUID:Ki,clamp:Fe,euclideanModulo:So,mapLinear:Bh,inverseLerp:zh,lerp:ps,damp:kh,pingpong:Hh,smoothstep:Gh,smootherstep:Vh,randInt:Wh,randFloat:Xh,randFloatSpread:qh,seededRandom:Yh,degToRad:jh,radToDeg:Kh,isPowerOfTwo:ho,ceilPowerOfTwo:$h,floorPowerOfTwo:cr,setQuaternionFromProperEuler:Zh,normalize:Ne,denormalize:Ui};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],y=i[4],M=i[7],A=i[2],w=i[5],C=i[8];return s[0]=o*_+a*v+l*A,s[3]=o*m+a*y+l*w,s[6]=o*f+a*M+l*C,s[1]=c*_+h*v+d*A,s[4]=c*m+h*y+d*w,s[7]=c*f+h*M+d*C,s[2]=u*_+p*v+g*A,s[5]=u*m+p*y+g*w,s[8]=u*f+p*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,p=c*s-o*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tr.makeScale(t,e)),this}rotate(t){return this.premultiply(Tr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new Vt;function Zl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ms(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jh(){const r=Ms("canvas");return r.style.display="block",r}const Ea={};function ms(r){r in Ea||(Ea[r]=!0,console.warn(r))}const ba=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wa=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[Nn]:{transfer:rr,primaries:or,toReference:r=>r,fromReference:r=>r},[Me]:{transfer:ne,primaries:or,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[pr]:{transfer:rr,primaries:ar,toReference:r=>r.applyMatrix3(wa),fromReference:r=>r.applyMatrix3(ba)},[Mo]:{transfer:ne,primaries:ar,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wa),fromReference:r=>r.applyMatrix3(ba).convertLinearToSRGB()}},Qh=new Set([Nn,pr]),Zt={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Rs[t].toReference,i=Rs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Rs[r].primaries},getTransfer:function(r){return r===Ze?rr:Rs[r].transfer}};function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vi;class Jl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Ms("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class Ql{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ki(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cr(i[o].image)):s.push(Cr(i[o]))}else s=Cr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Cr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class Oe extends ji{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=rn,i=rn,s=Ke,o=vs,a=on,l=jn,c=Oe.DEFAULT_ANISOTROPY,h=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ki(),this.name="",this.source=new Ql(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fi?Me:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?fi:Kl}set encoding(t){ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fi?Me:Ze}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Hl;Oe.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(p+1)/2,A=(f+1)/2,w=(h+u)/4,C=(d+_)/4,O=(g+m)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=C/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=O/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=O/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fi?Me:Ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ql(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends nu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tc extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iu extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let $i=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,f*v);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const M=a*v;if(l=l*m+u*M,c=c*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ta.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ta.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new z,Ta=new $i;class Es{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(s,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Ps.subVectors(this.max,ns),yi.subVectors(t.a,ns),xi.subVectors(t.b,ns),Mi.subVectors(t.c,ns),On.subVectors(xi,yi),Bn.subVectors(Mi,xi),ti.subVectors(yi,Mi);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ti.z,ti.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ti.z,0,-ti.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ti.y,ti.x,0];return!Lr(e,yi,xi,Mi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!Lr(e,yi,xi,Mi,Ps))?!1:(Is.crossVectors(On,Bn),e=[Is.x,Is.y,Is.z],Lr(e,yi,xi,Mi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new z,new z,new z,new z,new z,new z,new z,new z],Qe=new z,Ls=new Es,yi=new z,xi=new z,Mi=new z,On=new z,Bn=new z,ti=new z,ns=new z,Ps=new z,Is=new z,ei=new z;function Lr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ei.fromArray(r,s);const a=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const su=new Es,is=new z,Pr=new z;let Eo=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):su.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(Pr)),this.expandByPoint(is.copy(t.center).sub(Pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Sn=new z,Ir=new z,Ds=new z,zn=new z,Dr=new z,Ns=new z,Nr=new z;let ec=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ir.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ir);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=zn.dot(this.direction),l=-zn.dot(Ds),c=zn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ir).addScaledVector(Ds,u),p}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,s){Dr.subVectors(e,t),Ns.subVectors(n,t),Nr.crossVectors(Dr,Ns);let o=this.direction.dot(Nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Ns.crossVectors(zn,Ns));if(l<0)return null;const c=a*this.direction.dot(Dr.cross(zn));if(c<0||l+c>o)return null;const h=-a*zn.dot(Nr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class me{constructor(t,e,n,i,s,o,a,l,c,h,d,u,p,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),s=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,ou)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),kn.crossVectors(n,Ge),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),kn.crossVectors(n,Ge)),kn.normalize(),Us.crossVectors(Ge,kn),i[0]=kn.x,i[4]=Us.x,i[8]=Ge.x,i[1]=kn.y,i[5]=Us.y,i[9]=Ge.y,i[2]=kn.z,i[6]=Us.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],M=n[11],A=n[15],w=i[0],C=i[4],O=i[8],S=i[12],b=i[1],D=i[5],F=i[9],U=i[13],L=i[2],P=i[6],I=i[10],K=i[14],k=i[3],V=i[7],$=i[11],J=i[15];return s[0]=o*w+a*b+l*L+c*k,s[4]=o*C+a*D+l*P+c*V,s[8]=o*O+a*F+l*I+c*$,s[12]=o*S+a*U+l*K+c*J,s[1]=h*w+d*b+u*L+p*k,s[5]=h*C+d*D+u*P+p*V,s[9]=h*O+d*F+u*I+p*$,s[13]=h*S+d*U+u*K+p*J,s[2]=g*w+_*b+m*L+f*k,s[6]=g*C+_*D+m*P+f*V,s[10]=g*O+_*F+m*I+f*$,s[14]=g*S+_*U+m*K+f*J,s[3]=v*w+y*b+M*L+A*k,s[7]=v*C+y*D+M*P+A*V,s[11]=v*O+y*F+M*I+A*$,s[15]=v*S+y*U+M*K+A*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*p-n*l*p)+_*(+e*l*p-e*c*u+s*o*u-i*o*p+i*c*h-s*l*h)+m*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,y=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,M=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,A=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,w=e*v+n*y+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=v*C,t[1]=(_*u*s-d*m*s-_*i*p+n*m*p+d*i*f-n*u*f)*C,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*f+n*l*f)*C,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*p-n*l*p)*C,t[4]=y*C,t[5]=(h*m*s-g*u*s+g*i*p-e*m*p-h*i*f+e*u*f)*C,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*f-e*l*f)*C,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*p+e*l*p)*C,t[8]=M*C,t[9]=(g*d*s-h*_*s-g*n*p+e*_*p+h*n*f-e*d*f)*C,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*C,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*p-e*a*p)*C,t[12]=A*C,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*C,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,p=s*h,g=s*d,_=o*h,m=o*d,f=a*d,v=l*c,y=l*h,M=l*d,A=n.x,w=n.y,C=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+M)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(u+f))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+y)*C,i[9]=(m-v)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Si.set(i[0],i[1],i[2]).length();const o=Si.set(i[4],i[5],i[6]).length(),a=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/s,h=1/o,d=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Dn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===Dn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===lr)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Dn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,p=(n+i)*h;let g,_;if(a===Dn)g=(o+s)*d,_=-2*d;else if(a===lr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new z,tn=new me,ru=new z(0,0,0),ou=new z(1,1,1),kn=new z,Us=new z,Ge=new z,Aa=new me,Ca=new $i;class Wi{constructor(t=0,e=0,n=0,i=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let au=0;const Ra=new z,Ei=new $i,En=new me,Fs=new z,ss=new z,lu=new z,cu=new $i,La=new z(1,0,0),Pa=new z(0,1,0),Ia=new z(0,0,1),hu={type:"added"},uu={type:"removed"};class we extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new z,e=new Wi,n=new $i,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Vt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(La,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(Ia,t)}translateOnAxis(t,e){return Ra.copy(t).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(La,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(Ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ss,Fs,this.up):En.lookAt(Fs,ss,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(En),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new z(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new z,bn=new z,Ur=new z,wn=new z,bi=new z,wi=new z,Da=new z,Fr=new z,Or=new z,Br=new z;let Os=!1;class sn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),bn.subVectors(n,e),Ur.subVectors(t,e);const o=en.dot(en),a=en.dot(bn),l=en.dot(Ur),c=bn.dot(bn),h=bn.dot(Ur),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),bn.subVectors(t,e),en.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),en.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;bi.subVectors(i,n),wi.subVectors(s,n),Fr.subVectors(t,n);const l=bi.dot(Fr),c=wi.dot(Fr);if(l<=0&&c<=0)return e.copy(n);Or.subVectors(t,i);const h=bi.dot(Or),d=wi.dot(Or);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(bi,o);Br.subVectors(t,s);const p=bi.dot(Br),g=wi.dot(Br);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(wi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Da.subVectors(s,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Da,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(bi,o).addScaledVector(wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function zr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=So(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zr(o,s,t+1/3),this.g=zr(o,s,t),this.b=zr(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Fe(Ce.r*255,0,255))*65536+Math.round(Fe(Ce.g*255,0,255))*256+Math.round(Fe(Ce.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,s=Ce.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Me){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Bs);const n=ps(Hn.h,Bs.h,e),i=ps(Hn.s,Bs.s,e),s=ps(Hn.l,Bs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new xt;xt.NAMES=nc;let du=0,Zi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=zi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ss extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new z,zs=new Xt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xa&&(t.usage=this.usage),t}}class ic extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xe extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let fu=0;const je=new me,kr=new we,Ti=new z,Ve=new Es,rs=new Es,xe=new z;class Fn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zl(t)?sc:ic)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ve.min,rs.min),Ve.expandByPoint(xe),xe.addVectors(Ve.max,rs.max),Ve.expandByPoint(xe)):(Ve.expandByPoint(rs.min),Ve.expandByPoint(rs.max))}Ve.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),xe.add(Ti)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new z,h[b]=new z;const d=new z,u=new z,p=new z,g=new Xt,_=new Xt,m=new Xt,f=new z,v=new z;function y(b,D,F){d.fromArray(i,b*3),u.fromArray(i,D*3),p.fromArray(i,F*3),g.fromArray(o,b*2),_.fromArray(o,D*2),m.fromArray(o,F*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(U),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(U),c[b].add(f),c[D].add(f),c[F].add(f),h[b].add(v),h[D].add(v),h[F].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,D=M.length;b<D;++b){const F=M[b],U=F.start,L=F.count;for(let P=U,I=U+L;P<I;P+=3)y(n[P+0],n[P+1],n[P+2])}const A=new z,w=new z,C=new z,O=new z;function S(b){C.fromArray(s,b*3),O.copy(C);const D=c[b];A.copy(D),A.sub(C.multiplyScalar(C.dot(D))).normalize(),w.crossVectors(O,D);const U=w.dot(h[b])<0?-1:1;l[b*4]=A.x,l[b*4+1]=A.y,l[b*4+2]=A.z,l[b*4+3]=U}for(let b=0,D=M.length;b<D;++b){const F=M[b],U=F.start,L=F.count;for(let P=U,I=U+L;P<I;P+=3)S(n[P+0]),S(n[P+1]),S(n[P+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new yn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new me,ni=new ec,ks=new Eo,Ua=new z,Ai=new z,Ci=new z,Ri=new z,Hr=new z,Hs=new z,Gs=new Xt,Vs=new Xt,Ws=new Xt,Fa=new z,Oa=new z,Ba=new z,Xs=new z,qs=new z;class Pt extends we{constructor(t=new Fn,e=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Hr.fromBufferAttribute(d,t),o?Hs.addScaledVector(Hr,h):Hs.addScaledVector(Hr.sub(e),h))}e.add(Hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(s),ni.copy(t.ray).recast(t.near),!(ks.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ks,Ua)===null||ni.origin.distanceToSquared(Ua)>(t.far-t.near)**2))&&(Na.copy(s).invert(),ni.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=y;M<A;M+=3){const w=a.getX(M),C=a.getX(M+1),O=a.getX(M+2);i=Ys(this,f,t,n,c,h,d,w,C,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);i=Ys(this,o,t,n,c,h,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,A=y;M<A;M+=3){const w=M,C=M+1,O=M+2;i=Ys(this,f,t,n,c,h,d,w,C,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,y=m+1,M=m+2;i=Ys(this,o,t,n,c,h,d,v,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function pu(r,t,e,n,i,s,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Kn,a),l===null)return null;qs.copy(a),qs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:r}}function Ys(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ai),r.getVertexPosition(l,Ci),r.getVertexPosition(c,Ri);const h=pu(r,t,e,n,Ai,Ci,Ri,Xs);if(h){i&&(Gs.fromBufferAttribute(i,a),Vs.fromBufferAttribute(i,l),Ws.fromBufferAttribute(i,c),h.uv=sn.getInterpolation(Xs,Ai,Ci,Ri,Gs,Vs,Ws,new Xt)),s&&(Gs.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,l),Ws.fromBufferAttribute(s,c),h.uv1=sn.getInterpolation(Xs,Ai,Ci,Ri,Gs,Vs,Ws,new Xt),h.uv2=h.uv1),o&&(Fa.fromBufferAttribute(o,a),Oa.fromBufferAttribute(o,l),Ba.fromBufferAttribute(o,c),h.normal=sn.getInterpolation(Xs,Ai,Ci,Ri,Fa,Oa,Ba,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};sn.getNormal(Ai,Ci,Ri,d.normal),h.face=d}return h}class jt extends Fn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(d,2));function g(_,m,f,v,y,M,A,w,C,O,S){const b=M/C,D=A/O,F=M/2,U=A/2,L=w/2,P=C+1,I=O+1;let K=0,k=0;const V=new z;for(let $=0;$<I;$++){const J=$*D-U;for(let j=0;j<P;j++){const q=j*b-F;V[_]=q*v,V[m]=J*y,V[f]=L,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[f]=w>0?1:-1,h.push(V.x,V.y,V.z),d.push(j/C),d.push(1-$/O),K+=1}}for(let $=0;$<O;$++)for(let J=0;J<C;J++){const j=u+J+P*$,q=u+J+P*($+1),Z=u+(J+1)+P*($+1),rt=u+(J+1)+P*$;l.push(j,q,rt),l.push(q,Z,rt),k+=6}a.addGroup(p,k,S),p+=k,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(r){const t={};for(let e=0;e<r.length;e++){const n=Xi(r[e]);for(const i in n)t[i]=n[i]}return t}function mu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function rc(r){return r.getRenderTarget()===null?r.outputColorSpace:Zt.workingColorSpace}const gu={clone:Xi,merge:Ue};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends oc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Pi=1;class yu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Li,Pi,t,e);i.layers=this.layers,this.add(i);const s=new $e(Li,Pi,t,e);s.layers=this.layers,this.add(s);const o=new $e(Li,Pi,t,e);o.layers=this.layers,this.add(o);const a=new $e(Li,Pi,t,e);a.layers=this.layers,this.add(a);const l=new $e(Li,Pi,t,e);l.layers=this.layers,this.add(l);const c=new $e(Li,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ac extends Oe{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xu extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fi?Me:Ze),this.texture=new ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:qn});s.uniforms.tEquirect.value=e;const o=new Pt(i,s),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=Ke),new yu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Gr=new z,Mu=new z,Su=new Vt;class ri{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Gr.subVectors(n,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Su.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Eo,js=new z;class wo{constructor(t=new ri,e=new ri,n=new ri,i=new ri,s=new ri,o=new ri){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-s,u-c,m-p,M-f).normalize(),n[1].setComponents(l+s,u+c,m+p,M+f).normalize(),n[2].setComponents(l+o,u+h,m+g,M+v).normalize(),n[3].setComponents(l-o,u-h,m-g,M-v).normalize(),n[4].setComponents(l-a,u-d,m-_,M-y).normalize(),e===Dn)n[5].setComponents(l+a,u+d,m+_,M+y).normalize();else if(e===lr)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Eu(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,p=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,h,d){const u=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,c),p.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,i(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class To extends Fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-o;for(let y=0;y<c;y++){const M=y*d-s;g.push(M,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const y=v+c*f,M=v+c*(f+1),A=v+1+c*(f+1),w=v+1+c*f;p.push(y,M,w),p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ku=`vec3 transformedNormal = objectNormal;
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
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
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
}`,dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,_d=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,Ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,bd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
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
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_f=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,If=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
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
}`,zf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kf=`#define LAMBERT
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
}`,Hf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qf=`#define PHONG
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
}`,Yf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jf=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define TOON
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
}`,Zf=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,ep=`uniform vec3 color;
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
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ip=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ot={alphahash_fragment:bu,alphahash_pars_fragment:wu,alphamap_fragment:Tu,alphamap_pars_fragment:Au,alphatest_fragment:Cu,alphatest_pars_fragment:Ru,aomap_fragment:Lu,aomap_pars_fragment:Pu,batching_pars_vertex:Iu,batching_vertex:Du,begin_vertex:Nu,beginnormal_vertex:Uu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Gu,color_fragment:Vu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:qu,common:Yu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Ku,displacementmap_pars_vertex:$u,displacementmap_vertex:Zu,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ad,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:hd,gradientmap_pars_fragment:ud,lightmap_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:yd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:Ed,lights_fragment_begin:bd,lights_fragment_maps:wd,lights_fragment_end:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Ld,map_fragment:Pd,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Nd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Fd,morphcolor_vertex:Od,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:kd,normal_fragment_begin:Hd,normal_fragment_maps:Gd,normal_pars_fragment:Vd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:$d,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:tf,dithering_fragment:ef,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:af,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:hf,skinning_pars_vertex:uf,skinning_vertex:df,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:_f,transmission_fragment:vf,transmission_pars_fragment:yf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:Ef,background_vert:bf,background_frag:wf,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:Cf,cube_frag:Rf,depth_vert:Lf,depth_frag:Pf,distanceRGBA_vert:If,distanceRGBA_frag:Df,equirect_vert:Nf,equirect_frag:Uf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:kf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:qf,meshphong_frag:Yf,meshphysical_vert:jf,meshphysical_frag:Kf,meshtoon_vert:$f,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:tp,shadow_frag:ep,sprite_vert:np,sprite_frag:ip},st={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},mn={basic:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ue([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ue([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ue([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new xt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ue([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ue([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ue([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ue([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ue([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ue([st.common,st.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ue([st.lights,st.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};mn.physical={uniforms:Ue([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ks={r:0,b:0,g:0};function sp(r,t,e,n,i,s,o){const a=new xt(0);let l=s===!0?0:1,c,h,d=null,u=0,p=null;function g(m,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===fr)?(h===void 0&&(h=new Pt(new jt(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Xi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ne,(d!==y||u!==y.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Pt(new To(2,2),new mi({name:"BackgroundMaterial",uniforms:Xi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ks,rc(r)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function rp(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(L,P,I,K,k){let V=!1;if(o){const $=_(K,I,P);c!==$&&(c=$,p(c.object)),V=f(L,K,I,k),V&&v(L,K,I,k)}else{const $=P.wireframe===!0;(c.geometry!==K.id||c.program!==I.id||c.wireframe!==$)&&(c.geometry=K.id,c.program=I.id,c.wireframe=$,V=!0)}k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,O(L,P,I,K),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,P,I){const K=I.wireframe===!0;let k=a[L.id];k===void 0&&(k={},a[L.id]=k);let V=k[P.id];V===void 0&&(V={},k[P.id]=V);let $=V[K];return $===void 0&&($=m(u()),V[K]=$),$}function m(L){const P=[],I=[],K=[];for(let k=0;k<i;k++)P[k]=0,I[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,P,I,K){const k=c.attributes,V=P.attributes;let $=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){const Z=k[j];let rt=V[j];if(rt===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),Z===void 0||Z.attribute!==rt||rt&&Z.data!==rt.data)return!0;$++}return c.attributesNum!==$||c.index!==K}function v(L,P,I,K){const k={},V=P.attributes;let $=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){let Z=V[j];Z===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const rt={};rt.attribute=Z,Z&&Z.data&&(rt.data=Z.data),k[j]=rt,$++}c.attributes=k,c.attributesNum=$,c.index=K}function y(){const L=c.newAttributes;for(let P=0,I=L.length;P<I;P++)L[P]=0}function M(L){A(L,0)}function A(L,P){const I=c.newAttributes,K=c.enabledAttributes,k=c.attributeDivisors;I[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),k[L]!==P&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),k[L]=P)}function w(){const L=c.newAttributes,P=c.enabledAttributes;for(let I=0,K=P.length;I<K;I++)P[I]!==L[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function C(L,P,I,K,k,V,$){$===!0?r.vertexAttribIPointer(L,P,I,k,V):r.vertexAttribPointer(L,P,I,K,k,V)}function O(L,P,I,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=K.attributes,V=I.getAttributes(),$=P.defaultAttributeValues;for(const J in V){const j=V[J];if(j.location>=0){let q=k[J];if(q===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Z=q.normalized,rt=q.itemSize,dt=e.get(q);if(dt===void 0)continue;const ft=dt.buffer,Tt=dt.type,Ct=dt.bytesPerElement,pt=n.isWebGL2===!0&&(Tt===r.INT||Tt===r.UNSIGNED_INT||q.gpuType===Gl);if(q.isInterleavedBufferAttribute){const qt=q.data,H=qt.stride,Pe=q.offset;if(qt.isInstancedInterleavedBuffer){for(let Et=0;Et<j.locationSize;Et++)A(j.location+Et,qt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=qt.meshPerAttribute*qt.count)}else for(let Et=0;Et<j.locationSize;Et++)M(j.location+Et);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let Et=0;Et<j.locationSize;Et++)C(j.location+Et,rt/j.locationSize,Tt,Z,H*Ct,(Pe+rt/j.locationSize*Et)*Ct,pt)}else{if(q.isInstancedBufferAttribute){for(let qt=0;qt<j.locationSize;qt++)A(j.location+qt,q.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let qt=0;qt<j.locationSize;qt++)M(j.location+qt);r.bindBuffer(r.ARRAY_BUFFER,ft);for(let qt=0;qt<j.locationSize;qt++)C(j.location+qt,rt/j.locationSize,Tt,Z,rt*Ct,rt/j.locationSize*qt*Ct,pt)}}else if($!==void 0){const Z=$[J];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(j.location,Z);break;case 3:r.vertexAttrib3fv(j.location,Z);break;case 4:r.vertexAttrib4fv(j.location,Z);break;default:r.vertexAttrib1fv(j.location,Z)}}}}w()}function S(){F();for(const L in a){const P=a[L];for(const I in P){const K=P[I];for(const k in K)g(K[k].object),delete K[k];delete P[I]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const P=a[L.id];for(const I in P){const K=P[I];for(const k in K)g(K[k].object),delete K[k];delete P[I]}delete a[L.id]}function D(L){for(const P in a){const I=a[P];if(I[L.id]===void 0)continue;const K=I[L.id];for(const k in K)g(K[k].object),delete K[k];delete I[L.id]}}function F(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:M,disableUnusedAttributes:w}}function op(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function l(h,d,u){if(u===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,d,u),e.update(d,s,u)}function c(h,d,u){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ap(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,M=o||t.has("OES_texture_float"),A=y&&M,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:w}}function lp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ri,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,y=v*4;let M=f.clippingState||null;l.value=M,M=h(g,u,y,p);for(let A=0;A!==y;++A)M[A]=e[A];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cp(r){let t=new WeakMap;function e(o,a){return a===ro?o.mapping=Hi:a===oo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ro||a===oo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xu(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class cc extends oc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,za=[.125,.215,.35,.446,.526,.582],li=20,Vr=new cc,ka=new xt;let Wr=null,Xr=0,qr=0;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,Ha=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,oi,Ii),new z(0,oi,-Ii),new z(Ii,0,oi),new z(-Ii,0,oi),new z(oi,Ii,0),new z(-oi,Ii,0)];class Ga{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ys,format:on,colorSpace:Nn,depthBuffer:!1},i=Va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(s)),this._blurMaterial=up(s,t,e)}return i}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ka),h.toneMapping=Yn,h.autoClear=!1;const p=new Ss({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Pt(new jt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ka),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;$s(i,v*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;$s(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ha[(i-1)%Ha.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let v=0;for(let C=0;C<li;++C){const O=C/_,S=Math.exp(-O*O/2);f.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-Fi?i-y+Fi:0),w=4*(this._cubeSize-M);$s(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(d,Vr)}}function hp(r){const t=[],e=[],n=[];let i=r;const s=r-Fi+1+za.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Fi?l=za[o-r+Fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,O=w>2?0:-1,S=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];v.set(S,_*g*w),y.set(u,m*g*w);const b=[w,w,w,w,w,w];M.set(b,f*g*w)}const A=new Fn;A.setAttribute("position",new yn(v,_)),A.setAttribute("uv",new yn(y,m)),A.setAttribute("faceIndex",new yn(M,f)),t.push(A),i>Fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Va(r,t,e){const n=new pi(r,t,e);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function up(r,t,e){const n=new Float32Array(li),i=new z(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Wa(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Xa(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function dp(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ro||l===oo,h=l===Hi||l===Gi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ga(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ga(r));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pp(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,M=v.length;y<M;y+=3){const A=v[y+0],w=v[y+1],C=v[y+2];u.push(A,w,w,C,C,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const A=y+0,w=y+1,C=y+2;u.push(A,w,w,C,C,A)}}else return;const m=new(Zl(u)?sc:ic)(u,1);m.version=_;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function mp(r,t,e,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){r.drawElements(s,g,a,p*l),e.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),e.update(g,s,_)}function u(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function gp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _p(r,t){return r[0]-t[0]}function vp(r,t){return Math.abs(t[1])-Math.abs(r[1])}function yp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let P=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",P)};var p=P;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let S=0;y===!0&&(S=1),M===!0&&(S=2),A===!0&&(S=3);let b=h.attributes.position.count*S,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const F=new Float32Array(b*D*4*_),U=new tc(F,b,D,_);U.type=Xn,U.needsUpdate=!0;const L=S*4;for(let I=0;I<_;I++){const K=w[I],k=C[I],V=O[I],$=b*D*4*I;for(let J=0;J<K.count;J++){const j=J*L;y===!0&&(o.fromBufferAttribute(K,J),F[$+j+0]=o.x,F[$+j+1]=o.y,F[$+j+2]=o.z,F[$+j+3]=0),M===!0&&(o.fromBufferAttribute(k,J),F[$+j+4]=o.x,F[$+j+5]=o.y,F[$+j+6]=o.z,F[$+j+7]=0),A===!0&&(o.fromBufferAttribute(V,J),F[$+j+8]=o.x,F[$+j+9]=o.y,F[$+j+10]=o.z,F[$+j+11]=V.itemSize===4?o.w:1)}}m={count:_,texture:U,size:new Xt(b,D)},s.set(h,m),h.addEventListener("dispose",P)}let f=0;for(let y=0;y<u.length;y++)f+=u[y];const v=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[h.id]=_}for(let M=0;M<g;M++){const A=_[M];A[0]=M,A[1]=u[M]}_.sort(vp);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(_p);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const A=a[M],w=A[0],C=A[1];w!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+M)!==m[w]&&h.setAttribute("morphTarget"+M,m[w]),f&&h.getAttribute("morphNormal"+M)!==f[w]&&h.setAttribute("morphNormal"+M,f[w]),i[M]=C,v+=C):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function xp(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class hc extends Oe{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=Wn),n===void 0&&h===Vi&&(n=ui),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uc=new Oe,dc=new hc(1,1);dc.compareFunction=$l;const fc=new tc,pc=new iu,mc=new ac,qa=[],Ya=[],ja=new Float32Array(16),Ka=new Float32Array(9),$a=new Float32Array(4);function Ji(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=qa[i];if(s===void 0&&(s=new Float32Array(i),qa[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function mr(r,t){let e=Ya[t];e===void 0&&(e=new Int32Array(t),Ya[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Mp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Sp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function Ep(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function wp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;$a.set(n),r.uniformMatrix2fv(this.addr,!1,$a),_e(e,n)}}function Tp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ka.set(n),r.uniformMatrix3fv(this.addr,!1,Ka),_e(e,n)}}function Ap(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;ja.set(n),r.uniformMatrix4fv(this.addr,!1,ja),_e(e,n)}}function Cp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),_e(e,t)}}function Lp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),_e(e,t)}}function Pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),_e(e,t)}}function Ip(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),_e(e,t)}}function Np(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),_e(e,t)}}function Up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),_e(e,t)}}function Fp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?dc:uc;e.setTexture2D(t||s,i)}function Op(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pc,i)}function Bp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mc,i)}function zp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fc,i)}function kp(r){switch(r){case 5126:return Mp;case 35664:return Sp;case 35665:return Ep;case 35666:return bp;case 35674:return wp;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Lp;case 35669:case 35673:return Pp;case 5125:return Ip;case 36294:return Dp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}}function Hp(r,t){r.uniform1fv(this.addr,t)}function Gp(r,t){const e=Ji(t,this.size,2);r.uniform2fv(this.addr,e)}function Vp(r,t){const e=Ji(t,this.size,3);r.uniform3fv(this.addr,e)}function Wp(r,t){const e=Ji(t,this.size,4);r.uniform4fv(this.addr,e)}function Xp(r,t){const e=Ji(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qp(r,t){const e=Ji(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Yp(r,t){const e=Ji(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function jp(r,t){r.uniform1iv(this.addr,t)}function Kp(r,t){r.uniform2iv(this.addr,t)}function $p(r,t){r.uniform3iv(this.addr,t)}function Zp(r,t){r.uniform4iv(this.addr,t)}function Jp(r,t){r.uniform1uiv(this.addr,t)}function Qp(r,t){r.uniform2uiv(this.addr,t)}function tm(r,t){r.uniform3uiv(this.addr,t)}function em(r,t){r.uniform4uiv(this.addr,t)}function nm(r,t,e){const n=this.cache,i=t.length,s=mr(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uc,s[o])}function im(r,t,e){const n=this.cache,i=t.length,s=mr(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pc,s[o])}function sm(r,t,e){const n=this.cache,i=t.length,s=mr(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mc,s[o])}function rm(r,t,e){const n=this.cache,i=t.length,s=mr(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fc,s[o])}function om(r){switch(r){case 5126:return Hp;case 35664:return Gp;case 35665:return Vp;case 35666:return Wp;case 35674:return Xp;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return jp;case 35667:case 35671:return Kp;case 35668:case 35672:return $p;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return tm;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=kp(e.type)}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=om(e.type)}}class cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Za(r,t){r.seq.push(t),r.map[t.id]=t}function hm(r,t,e){const n=r.name,i=n.length;for(Yr.lastIndex=0;;){const s=Yr.exec(n),o=Yr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Za(e,c===void 0?new am(a,r,t):new lm(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new cm(a),Za(e,d)),e=d}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);hm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ja(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const um=37297;let dm=0;function fm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function pm(r){const t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(r);let n;switch(t===e?n="":t===ar&&e===or?n="LinearDisplayP3ToLinearSRGB":t===or&&e===ar&&(n="LinearSRGBToLinearDisplayP3"),r){case Nn:case pr:return[n,"LinearTransferOETF"];case Me:case Mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Qa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+fm(r.getShaderSource(t),o)}else return i}function mm(r,t){const e=pm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gm(r,t){let e;switch(t){case fh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="OptimizedCineon";break;case gh:e="ACESFilmic";break;case vh:e="AgX";break;case _h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function _m(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oi).join(`
`)}function vm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Oi).join(`
`)}function ym(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Oi(r){return r!==""}function tl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(r){return r.replace(Mm,Em)}const Sm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Em(r,t){let e=Ot[t];if(e===void 0){const n=Sm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uo(e)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(r){return r.replace(bm,wm)}function wm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Am(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hi:case Gi:t="ENVMAP_TYPE_CUBE";break;case fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vo:t="ENVMAP_BLENDING_MULTIPLY";break;case uh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Tm(e),c=Am(e),h=Cm(e),d=Rm(e),u=Lm(e),p=e.isWebGL2?"":_m(e),g=vm(e),_=ym(s),m=i.createProgram();let f,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Oi).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Oi).join(`
`),v.length>0&&(v+=`
`)):(f=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),v=[p,il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Yn?gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,mm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),o=uo(o),o=tl(o,e),o=el(o,e),a=uo(a),a=tl(a,e),a=el(a,e),o=nl(o),a=nl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=y+f+o,A=y+v+a,w=Ja(i,i.VERTEX_SHADER,M),C=Ja(i,i.FRAGMENT_SHADER,A);i.attachShader(m,w),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(F){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),P=i.getShaderInfoLog(C).trim();let I=!0,K=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,w,C);else{const k=Qa(i,w,"vertex"),V=Qa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+k+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||P==="")&&(K=!1);K&&(F.diagnostics={runnable:I,programLog:U,vertexShader:{log:L,prefix:f},fragmentShader:{log:P,prefix:v}})}i.deleteShader(w),i.deleteShader(C),S=new ir(i,m),b=xm(i,m)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,um)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=C,this}let Im=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nm(t),e.set(t,n)),n}}class Nm{constructor(t){this.id=Im++,this.code=t,this.usedTimes=0}}function Um(r,t,e,n,i,s,o){const a=new bo,l=new Dm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,b,D,F,U){const L=F.fog,P=U.geometry,I=S.isMeshStandardMaterial?F.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||I),k=K&&K.mapping===fr?K.image.height:null,V=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=$!==void 0?$.length:0;let j=0;P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3);let q,Z,rt,dt;if(V){const Ie=mn[V];q=Ie.vertexShader,Z=Ie.fragmentShader}else q=S.vertexShader,Z=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),dt=l.getFragmentShaderID(S);const ft=r.getRenderTarget(),Tt=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,pt=!!S.map,qt=!!S.matcap,H=!!K,Pe=!!S.aoMap,Et=!!S.lightMap,Dt=!!S.bumpMap,_t=!!S.normalMap,re=!!S.displacementMap,Bt=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,W=S.anisotropy>0,et=S.clearcoat>0,tt=S.iridescence>0,nt=S.sheen>0,vt=S.transmission>0,lt=W&&!!S.anisotropyMap,mt=et&&!!S.clearcoatMap,At=et&&!!S.clearcoatNormalMap,zt=et&&!!S.clearcoatRoughnessMap,Q=tt&&!!S.iridescenceMap,$t=tt&&!!S.iridescenceThicknessMap,Wt=nt&&!!S.sheenColorMap,It=nt&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,gt=!!S.specularColorMap,Ft=!!S.specularIntensityMap,Kt=vt&&!!S.transmissionMap,le=vt&&!!S.thicknessMap,Ht=!!S.gradientMap,it=!!S.alphaMap,N=S.alphaTest>0,ot=!!S.alphaHash,at=!!S.extensions,Rt=!!P.attributes.uv1,bt=!!P.attributes.uv2,Jt=!!P.attributes.uv3;let Qt=Yn;return S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Qt=r.toneMapping),{isWebGL2:h,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:Z,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ct,instancing:Tt,instancingColor:Tt&&U.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Nn,map:pt,matcap:qt,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:k,aoMap:Pe,lightMap:Et,bumpMap:Dt,normalMap:_t,displacementMap:u&&re,emissiveMap:Bt,normalMapObjectSpace:_t&&S.normalMapType===Lh,normalMapTangentSpace:_t&&S.normalMapType===xo,metalnessMap:R,roughnessMap:E,anisotropy:W,anisotropyMap:lt,clearcoat:et,clearcoatMap:mt,clearcoatNormalMap:At,clearcoatRoughnessMap:zt,iridescence:tt,iridescenceMap:Q,iridescenceThicknessMap:$t,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:It,specularMap:Mt,specularColorMap:gt,specularIntensityMap:Ft,transmission:vt,transmissionMap:Kt,thicknessMap:le,gradientMap:Ht,opaque:S.transparent===!1&&S.blending===zi,alphaMap:it,alphaTest:N,alphaHash:ot,combine:S.combine,mapUv:pt&&_(S.map.channel),aoMapUv:Pe&&_(S.aoMap.channel),lightMapUv:Et&&_(S.lightMap.channel),bumpMapUv:Dt&&_(S.bumpMap.channel),normalMapUv:_t&&_(S.normalMap.channel),displacementMapUv:re&&_(S.displacementMap.channel),emissiveMapUv:Bt&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:lt&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(S.sheenRoughnessMap.channel),specularMapUv:Mt&&_(S.specularMap.channel),specularColorMapUv:gt&&_(S.specularColorMap.channel),specularIntensityMapUv:Ft&&_(S.specularIntensityMap.channel),transmissionMapUv:Kt&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:it&&_(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(_t||W),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Rt,vertexUv2s:bt,vertexUv3s:Jt,pointsUvs:U.isPoints===!0&&!!P.attributes.uv&&(pt||it),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:pt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:at&&S.extensions.derivatives===!0,extensionFragDepth:at&&S.extensions.fragDepth===!0,extensionDrawBuffers:at&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:at&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:at&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(b,S),y(b,S),b.push(r.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const b=g[S.type];let D;if(b){const F=mn[b];D=gu.clone(F.uniforms)}else D=S.uniforms;return D}function A(S,b){let D;for(let F=0,U=c.length;F<U;F++){const L=c[F];if(L.cacheKey===b){D=L,++D.usedTimes;break}}return D===void 0&&(D=new Pm(r,b,S,s),c.push(D)),D}function w(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:O}}function Fm(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Om(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function sl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Om),n.length>1&&n.sort(u||sl),i.length>1&&i.sort(u||sl)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Bm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new rl,r.set(n,[o])):i>=s.length?(o=new rl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function zm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new xt};break;case"SpotLight":e={position:new z,direction:new z,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function km(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Hm=0;function Gm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Vm(r,t){const e=new zm,n=km(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new z);const s=new z,o=new me,a=new me;function l(h,d){let u=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,m=0,f=0,v=0,y=0,M=0,A=0,w=0,C=0,O=0,S=0;h.sort(Gm);const b=d===!0?Math.PI:1;for(let F=0,U=h.length;F<U;F++){const L=h[F],P=L.color,I=L.intensity,K=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=P.r*I*b,p+=P.g*I*b,g+=P.b*I*b;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],I);S++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const $=L.shadow,J=n.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=L.shadow.matrix,M++}i.directional[_]=V,_++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(P).multiplyScalar(I*b),V.distance=K,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[f]=V;const $=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,$.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[f]=$.matrix,L.castShadow){const J=n.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=k,w++}f++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(P).multiplyScalar(I),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=V,v++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity*b),V.distance=L.distance,V.decay=L.decay,L.castShadow){const $=L.shadow,J=n.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=L.shadow.matrix,A++}i.point[m]=V,m++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(I*b),V.groundColor.copy(L.groundColor).multiplyScalar(I*b),i.hemi[y]=V,y++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==f||D.rectAreaLength!==v||D.hemiLength!==y||D.numDirectionalShadows!==M||D.numPointShadows!==A||D.numSpotShadows!==w||D.numSpotMaps!==C||D.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+C-O,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=S,D.directionalLength=_,D.pointLength=m,D.spotLength=f,D.rectAreaLength=v,D.hemiLength=y,D.numDirectionalShadows=M,D.numPointShadows=A,D.numSpotShadows=w,D.numSpotMaps=C,D.numLightProbes=S,i.version=Hm++)}function c(h,d){let u=0,p=0,g=0,_=0,m=0;const f=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const M=h[v];if(M.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),u++}else if(M.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function ol(r,t){const e=new Vm(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Wm(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new ol(r,t),e.set(s,[l])):o>=a.length?(l=new ol(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Xm extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qm extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
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
}`;function Km(r,t,e){let n=new wo;const i=new Xt,s=new Xt,o=new Se,a=new Xm({depthPacking:Rh}),l=new qm,c={},h=e.maxTextureSize,d={[Kn]:ze,[ze]:Kn,[_n]:_n},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Ym,fragmentShader:jm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let f=this.type;this.render=function(w,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),b=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=f!==Pn&&this.type===Pn,L=f===Pn&&this.type!==Pn;for(let P=0,I=w.length;P<I;P++){const K=w[P],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const V=k.getFrameExtents();if(i.multiply(V),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,k.mapSize.y=s.y)),k.map===null||U===!0||L===!0){const J=this.type!==Pn?{minFilter:Ee,magFilter:Ee}:{};k.map!==null&&k.map.dispose(),k.map=new pi(i.x,i.y,J),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const $=k.getViewportCount();for(let J=0;J<$;J++){const j=k.getViewport(J);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),F.viewport(o),k.updateMatrices(K,J),n=k.getFrustum(),M(C,O,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&v(k,O),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,b,D)};function v(w,C){const O=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,O,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,O,p,_,null)}function y(w,C,O,S){let b=null;const D=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=O.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=b.uuid,U=C.uuid;let L=c[F];L===void 0&&(L={},c[F]=L);let P=L[U];P===void 0&&(P=b.clone(),L[U]=P,C.addEventListener("dispose",A)),b=P}if(b.visible=C.visible,b.wireframe=C.wireframe,S===Pn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=r.properties.get(b);F.light=O}return b}function M(w,C,O,S,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const U=t.update(w),L=w.material;if(Array.isArray(L)){const P=U.groups;for(let I=0,K=P.length;I<K;I++){const k=P[I],V=L[k.materialIndex];if(V&&V.visible){const $=y(w,V,S,b);w.onBeforeShadow(r,w,C,O,U,$,k),r.renderBufferDirect(O,null,U,$,w,k),w.onAfterShadow(r,w,C,O,U,$,k)}}}else if(L.visible){const P=y(w,L,S,b);w.onBeforeShadow(r,w,C,O,U,P,null),r.renderBufferDirect(O,null,U,P,w,null),w.onAfterShadow(r,w,C,O,U,P,null)}}const F=w.children;for(let U=0,L=F.length;U<L;U++)M(F[U],C,O,S,b)}function A(w){w.target.removeEventListener("dispose",A);for(const O in c){const S=c[O],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function $m(r,t,e){const n=e.isWebGL2;function i(){let N=!1;const ot=new Se;let at=null;const Rt=new Se(0,0,0,0);return{setMask:function(bt){at!==bt&&!N&&(r.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){N=bt},setClear:function(bt,Jt,Qt,ve,Ie){Ie===!0&&(bt*=ve,Jt*=ve,Qt*=ve),ot.set(bt,Jt,Qt,ve),Rt.equals(ot)===!1&&(r.clearColor(bt,Jt,Qt,ve),Rt.copy(ot))},reset:function(){N=!1,at=null,Rt.set(-1,0,0,0)}}}function s(){let N=!1,ot=null,at=null,Rt=null;return{setTest:function(bt){bt?Ct(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(bt){ot!==bt&&!N&&(r.depthMask(bt),ot=bt)},setFunc:function(bt){if(at!==bt){switch(bt){case sh:r.depthFunc(r.NEVER);break;case rh:r.depthFunc(r.ALWAYS);break;case oh:r.depthFunc(r.LESS);break;case sr:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case lh:r.depthFunc(r.GEQUAL);break;case ch:r.depthFunc(r.GREATER);break;case hh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}at=bt}},setLocked:function(bt){N=bt},setClear:function(bt){Rt!==bt&&(r.clearDepth(bt),Rt=bt)},reset:function(){N=!1,ot=null,at=null,Rt=null}}}function o(){let N=!1,ot=null,at=null,Rt=null,bt=null,Jt=null,Qt=null,ve=null,Ie=null;return{setTest:function(te){N||(te?Ct(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(te){ot!==te&&!N&&(r.stencilMask(te),ot=te)},setFunc:function(te,De,hn){(at!==te||Rt!==De||bt!==hn)&&(r.stencilFunc(te,De,hn),at=te,Rt=De,bt=hn)},setOp:function(te,De,hn){(Jt!==te||Qt!==De||ve!==hn)&&(r.stencilOp(te,De,hn),Jt=te,Qt=De,ve=hn)},setLocked:function(te){N=te},setClear:function(te){Ie!==te&&(r.clearStencil(te),Ie=te)},reset:function(){N=!1,ot=null,at=null,Rt=null,bt=null,Jt=null,Qt=null,ve=null,Ie=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,y=null,M=null,A=null,w=null,C=null,O=null,S=new xt(0,0,0),b=0,D=!1,F=null,U=null,L=null,P=null,I=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,V=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),k=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=V>=2);let J=null,j={};const q=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),rt=new Se().fromArray(q),dt=new Se().fromArray(Z);function ft(N,ot,at,Rt){const bt=new Uint8Array(4),Jt=r.createTexture();r.bindTexture(N,Jt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qt=0;Qt<at;Qt++)n&&(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,Rt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(ot+Qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return Jt}const Tt={};Tt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Tt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Tt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(r.DEPTH_TEST),l.setFunc(sr),Bt(!1),R(Ho),Ct(r.CULL_FACE),_t(qn);function Ct(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function pt(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function qt(N,ot){return p[N]!==ot?(r.bindFramebuffer(N,ot),p[N]=ot,n&&(N===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ot),N===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function H(N,ot){let at=_,Rt=!1;if(N)if(at=g.get(ot),at===void 0&&(at=[],g.set(ot,at)),N.isWebGLMultipleRenderTargets){const bt=N.texture;if(at.length!==bt.length||at[0]!==r.COLOR_ATTACHMENT0){for(let Jt=0,Qt=bt.length;Jt<Qt;Jt++)at[Jt]=r.COLOR_ATTACHMENT0+Jt;at.length=bt.length,Rt=!0}}else at[0]!==r.COLOR_ATTACHMENT0&&(at[0]=r.COLOR_ATTACHMENT0,Rt=!0);else at[0]!==r.BACK&&(at[0]=r.BACK,Rt=!0);Rt&&(e.isWebGL2?r.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function Pe(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const Et={[ai]:r.FUNC_ADD,[Vc]:r.FUNC_SUBTRACT,[Wc]:r.FUNC_REVERSE_SUBTRACT};if(n)Et[Xo]=r.MIN,Et[qo]=r.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(Et[Xo]=N.MIN_EXT,Et[qo]=N.MAX_EXT)}const Dt={[Xc]:r.ZERO,[qc]:r.ONE,[Yc]:r.SRC_COLOR,[io]:r.SRC_ALPHA,[Qc]:r.SRC_ALPHA_SATURATE,[Zc]:r.DST_COLOR,[Kc]:r.DST_ALPHA,[jc]:r.ONE_MINUS_SRC_COLOR,[so]:r.ONE_MINUS_SRC_ALPHA,[Jc]:r.ONE_MINUS_DST_COLOR,[$c]:r.ONE_MINUS_DST_ALPHA,[th]:r.CONSTANT_COLOR,[eh]:r.ONE_MINUS_CONSTANT_COLOR,[nh]:r.CONSTANT_ALPHA,[ih]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(N,ot,at,Rt,bt,Jt,Qt,ve,Ie,te){if(N===qn){f===!0&&(pt(r.BLEND),f=!1);return}if(f===!1&&(Ct(r.BLEND),f=!0),N!==Gc){if(N!==v||te!==D){if((y!==ai||w!==ai)&&(r.blendEquation(r.FUNC_ADD),y=ai,w=ai),te)switch(N){case zi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.ONE,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Go:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,A=null,C=null,O=null,S.set(0,0,0),b=0,v=N,D=te}return}bt=bt||ot,Jt=Jt||at,Qt=Qt||Rt,(ot!==y||bt!==w)&&(r.blendEquationSeparate(Et[ot],Et[bt]),y=ot,w=bt),(at!==M||Rt!==A||Jt!==C||Qt!==O)&&(r.blendFuncSeparate(Dt[at],Dt[Rt],Dt[Jt],Dt[Qt]),M=at,A=Rt,C=Jt,O=Qt),(ve.equals(S)===!1||Ie!==b)&&(r.blendColor(ve.r,ve.g,ve.b,Ie),S.copy(ve),b=Ie),v=N,D=!1}function re(N,ot){N.side===_n?pt(r.CULL_FACE):Ct(r.CULL_FACE);let at=N.side===ze;ot&&(at=!at),Bt(at),N.blending===zi&&N.transparent===!1?_t(qn):_t(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Rt=N.stencilWrite;c.setTest(Rt),Rt&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),W(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(N){F!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),F=N)}function R(N){N!==kc?(Ct(r.CULL_FACE),N!==U&&(N===Ho?r.cullFace(r.BACK):N===Hc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),U=N}function E(N){N!==L&&(k&&r.lineWidth(N),L=N)}function W(N,ot,at){N?(Ct(r.POLYGON_OFFSET_FILL),(P!==ot||I!==at)&&(r.polygonOffset(ot,at),P=ot,I=at)):pt(r.POLYGON_OFFSET_FILL)}function et(N){N?Ct(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function tt(N){N===void 0&&(N=r.TEXTURE0+K-1),J!==N&&(r.activeTexture(N),J=N)}function nt(N,ot,at){at===void 0&&(J===null?at=r.TEXTURE0+K-1:at=J);let Rt=j[at];Rt===void 0&&(Rt={type:void 0,texture:void 0},j[at]=Rt),(Rt.type!==N||Rt.texture!==ot)&&(J!==at&&(r.activeTexture(at),J=at),r.bindTexture(N,ot||Tt[N]),Rt.type=N,Rt.texture=ot)}function vt(){const N=j[J];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function lt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(N){rt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),rt.copy(N))}function Kt(N){dt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),dt.copy(N))}function le(N,ot){let at=d.get(ot);at===void 0&&(at=new WeakMap,d.set(ot,at));let Rt=at.get(N);Rt===void 0&&(Rt=r.getUniformBlockIndex(ot,N.name),at.set(N,Rt))}function Ht(N,ot){const Rt=d.get(ot).get(N);h.get(ot)!==Rt&&(r.uniformBlockBinding(ot,Rt,N.__bindingPointIndex),h.set(ot,Rt))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,j={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,y=null,M=null,A=null,w=null,C=null,O=null,S=new xt(0,0,0),b=0,D=!1,F=null,U=null,L=null,P=null,I=null,rt.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ct,disable:pt,bindFramebuffer:qt,drawBuffers:H,useProgram:Pe,setBlending:_t,setMaterial:re,setFlipSided:Bt,setCullFace:R,setLineWidth:E,setPolygonOffset:W,setScissorTest:et,activeTexture:tt,bindTexture:nt,unbindTexture:vt,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:Mt,texImage3D:gt,updateUBOMapping:le,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:It,texSubImage2D:At,texSubImage3D:zt,compressedTexSubImage2D:Q,compressedTexSubImage3D:$t,scissor:Ft,viewport:Kt,reset:it}}function Zm(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):Ms("canvas")}function _(R,E,W,et){let tt=1;if((R.width>et||R.height>et)&&(tt=et/Math.max(R.width,R.height)),tt<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const nt=E?cr:Math.floor,vt=nt(tt*R.width),lt=nt(tt*R.height);d===void 0&&(d=g(vt,lt));const mt=W?g(vt,lt):d;return mt.width=vt,mt.height=lt,mt.getContext("2d").drawImage(R,0,0,vt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+vt+"x"+lt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return ho(R.width)&&ho(R.height)}function f(R){return a?!1:R.wrapS!==rn||R.wrapT!==rn||R.minFilter!==Ee&&R.minFilter!==Ke}function v(R,E){return R.generateMipmaps&&E&&R.minFilter!==Ee&&R.minFilter!==Ke}function y(R){r.generateMipmap(R)}function M(R,E,W,et,tt=!1){if(a===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=E;if(E===r.RED&&(W===r.FLOAT&&(nt=r.R32F),W===r.HALF_FLOAT&&(nt=r.R16F),W===r.UNSIGNED_BYTE&&(nt=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(nt=r.R8UI),W===r.UNSIGNED_SHORT&&(nt=r.R16UI),W===r.UNSIGNED_INT&&(nt=r.R32UI),W===r.BYTE&&(nt=r.R8I),W===r.SHORT&&(nt=r.R16I),W===r.INT&&(nt=r.R32I)),E===r.RG&&(W===r.FLOAT&&(nt=r.RG32F),W===r.HALF_FLOAT&&(nt=r.RG16F),W===r.UNSIGNED_BYTE&&(nt=r.RG8)),E===r.RGBA){const vt=tt?rr:Zt.getTransfer(et);W===r.FLOAT&&(nt=r.RGBA32F),W===r.HALF_FLOAT&&(nt=r.RGBA16F),W===r.UNSIGNED_BYTE&&(nt=vt===ne?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function A(R,E,W){return v(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==Ee&&R.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){return R===Ee||R===Yo||R===xr?r.NEAREST:r.LINEAR}function C(R){const E=R.target;E.removeEventListener("dispose",C),S(E),E.isVideoTexture&&h.delete(E)}function O(R){const E=R.target;E.removeEventListener("dispose",O),D(E)}function S(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,et=u.get(W);if(et){const tt=et[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(R),Object.keys(et).length===0&&u.delete(W)}n.remove(R)}function b(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const W=R.source,et=u.get(W);delete et[E.__cacheKey],o.memory.textures--}function D(R){const E=R.texture,W=n.get(R),et=n.get(E);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(W.__webglFramebuffer[tt]))for(let nt=0;nt<W.__webglFramebuffer[tt].length;nt++)r.deleteFramebuffer(W.__webglFramebuffer[tt][nt]);else r.deleteFramebuffer(W.__webglFramebuffer[tt]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[tt])}else{if(Array.isArray(W.__webglFramebuffer))for(let tt=0;tt<W.__webglFramebuffer.length;tt++)r.deleteFramebuffer(W.__webglFramebuffer[tt]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let tt=0;tt<W.__webglColorRenderbuffer.length;tt++)W.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[tt]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let tt=0,nt=E.length;tt<nt;tt++){const vt=n.get(E[tt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(E[tt])}n.remove(E),n.remove(R)}let F=0;function U(){F=0}function L(){const R=F;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),F+=1,R}function P(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function I(R,E){const W=n.get(R);if(R.isVideoTexture&&re(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(W,R,E);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function K(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){rt(W,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function k(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){rt(W,R,E);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function V(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){dt(W,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const $={[ao]:r.REPEAT,[rn]:r.CLAMP_TO_EDGE,[lo]:r.MIRRORED_REPEAT},J={[Ee]:r.NEAREST,[Yo]:r.NEAREST_MIPMAP_NEAREST,[xr]:r.NEAREST_MIPMAP_LINEAR,[Ke]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[vs]:r.LINEAR_MIPMAP_LINEAR},j={[Ph]:r.NEVER,[Oh]:r.ALWAYS,[Ih]:r.LESS,[$l]:r.LEQUAL,[Dh]:r.EQUAL,[Fh]:r.GEQUAL,[Nh]:r.GREATER,[Uh]:r.NOTEQUAL};function q(R,E,W){if(W?(r.texParameteri(R,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,$[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,J[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,J[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==rn||E.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Ee&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ee||E.minFilter!==xr&&E.minFilter!==vs||E.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===ys&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(R,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Z(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const et=E.source;let tt=u.get(et);tt===void 0&&(tt={},u.set(et,tt));const nt=P(E);if(nt!==R.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[nt].usedTimes++;const vt=tt[R.__cacheKey];vt!==void 0&&(tt[R.__cacheKey].usedTimes--,vt.usedTimes===0&&b(E)),R.__cacheKey=nt,R.__webglTexture=tt[nt].texture}return W}function rt(R,E,W){let et=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=r.TEXTURE_3D);const tt=Z(R,E),nt=E.source;e.bindTexture(et,R.__webglTexture,r.TEXTURE0+W);const vt=n.get(nt);if(nt.version!==vt.__version||tt===!0){e.activeTexture(r.TEXTURE0+W);const lt=Zt.getPrimaries(Zt.workingColorSpace),mt=E.colorSpace===Ze?null:Zt.getPrimaries(E.colorSpace),At=E.colorSpace===Ze||lt===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const zt=f(E)&&m(E.image)===!1;let Q=_(E.image,zt,!1,i.maxTextureSize);Q=Bt(E,Q);const $t=m(Q)||a,Wt=s.convert(E.format,E.colorSpace);let It=s.convert(E.type),Mt=M(E.internalFormat,Wt,It,E.colorSpace,E.isVideoTexture);q(et,E,$t);let gt;const Ft=E.mipmaps,Kt=a&&E.isVideoTexture!==!0&&Mt!==jl,le=vt.__version===void 0||tt===!0,Ht=A(E,Q,$t);if(E.isDepthTexture)Mt=r.DEPTH_COMPONENT,a?E.type===Xn?Mt=r.DEPTH_COMPONENT32F:E.type===Wn?Mt=r.DEPTH_COMPONENT24:E.type===ui?Mt=r.DEPTH24_STENCIL8:Mt=r.DEPTH_COMPONENT16:E.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===di&&Mt===r.DEPTH_COMPONENT&&E.type!==yo&&E.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Wn,It=s.convert(E.type)),E.format===Vi&&Mt===r.DEPTH_COMPONENT&&(Mt=r.DEPTH_STENCIL,E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ui,It=s.convert(E.type))),le&&(Kt?e.texStorage2D(r.TEXTURE_2D,1,Mt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,Wt,It,null));else if(E.isDataTexture)if(Ft.length>0&&$t){Kt&&le&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Ft[0].width,Ft[0].height);for(let it=0,N=Ft.length;it<N;it++)gt=Ft[it],Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,gt.width,gt.height,Wt,It,gt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,gt.width,gt.height,0,Wt,It,gt.data);E.generateMipmaps=!1}else Kt?(le&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,Wt,It,Q.data)):e.texImage2D(r.TEXTURE_2D,0,Mt,Q.width,Q.height,0,Wt,It,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Mt,Ft[0].width,Ft[0].height,Q.depth);for(let it=0,N=Ft.length;it<N;it++)gt=Ft[it],E.format!==on?Wt!==null?Kt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,Q.depth,Wt,gt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,Mt,gt.width,gt.height,Q.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,gt.width,gt.height,Q.depth,Wt,It,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,Mt,gt.width,gt.height,Q.depth,0,Wt,It,gt.data)}else{Kt&&le&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Ft[0].width,Ft[0].height);for(let it=0,N=Ft.length;it<N;it++)gt=Ft[it],E.format!==on?Wt!==null?Kt?e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,gt.width,gt.height,Wt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,it,Mt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,gt.width,gt.height,Wt,It,gt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,gt.width,gt.height,0,Wt,It,gt.data)}else if(E.isDataArrayTexture)Kt?(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,Mt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Wt,It,Q.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,Q.width,Q.height,Q.depth,0,Wt,It,Q.data);else if(E.isData3DTexture)Kt?(le&&e.texStorage3D(r.TEXTURE_3D,Ht,Mt,Q.width,Q.height,Q.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Wt,It,Q.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,Q.width,Q.height,Q.depth,0,Wt,It,Q.data);else if(E.isFramebufferTexture){if(le)if(Kt)e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Q.width,Q.height);else{let it=Q.width,N=Q.height;for(let ot=0;ot<Ht;ot++)e.texImage2D(r.TEXTURE_2D,ot,Mt,it,N,0,Wt,It,null),it>>=1,N>>=1}}else if(Ft.length>0&&$t){Kt&&le&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Ft[0].width,Ft[0].height);for(let it=0,N=Ft.length;it<N;it++)gt=Ft[it],Kt?e.texSubImage2D(r.TEXTURE_2D,it,0,0,Wt,It,gt):e.texImage2D(r.TEXTURE_2D,it,Mt,Wt,It,gt);E.generateMipmaps=!1}else Kt?(le&&e.texStorage2D(r.TEXTURE_2D,Ht,Mt,Q.width,Q.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,It,Q)):e.texImage2D(r.TEXTURE_2D,0,Mt,Wt,It,Q);v(E,$t)&&y(et),vt.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function dt(R,E,W){if(E.image.length!==6)return;const et=Z(R,E),tt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const nt=n.get(tt);if(tt.version!==nt.__version||et===!0){e.activeTexture(r.TEXTURE0+W);const vt=Zt.getPrimaries(Zt.workingColorSpace),lt=E.colorSpace===Ze?null:Zt.getPrimaries(E.colorSpace),mt=E.colorSpace===Ze||vt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,zt=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let it=0;it<6;it++)!At&&!zt?Q[it]=_(E.image[it],!1,!0,i.maxCubemapSize):Q[it]=zt?E.image[it].image:E.image[it],Q[it]=Bt(E,Q[it]);const $t=Q[0],Wt=m($t)||a,It=s.convert(E.format,E.colorSpace),Mt=s.convert(E.type),gt=M(E.internalFormat,It,Mt,E.colorSpace),Ft=a&&E.isVideoTexture!==!0,Kt=nt.__version===void 0||et===!0;let le=A(E,$t,Wt);q(r.TEXTURE_CUBE_MAP,E,Wt);let Ht;if(At){Ft&&Kt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,le,gt,$t.width,$t.height);for(let it=0;it<6;it++){Ht=Q[it].mipmaps;for(let N=0;N<Ht.length;N++){const ot=Ht[N];E.format!==on?It!==null?Ft?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N,0,0,ot.width,ot.height,It,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N,gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N,0,0,ot.width,ot.height,It,Mt,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N,gt,ot.width,ot.height,0,It,Mt,ot.data)}}}else{Ht=E.mipmaps,Ft&&Kt&&(Ht.length>0&&le++,e.texStorage2D(r.TEXTURE_CUBE_MAP,le,gt,Q[0].width,Q[0].height));for(let it=0;it<6;it++)if(zt){Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Q[it].width,Q[it].height,It,Mt,Q[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,gt,Q[it].width,Q[it].height,0,It,Mt,Q[it].data);for(let N=0;N<Ht.length;N++){const at=Ht[N].image[it].image;Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N+1,0,0,at.width,at.height,It,Mt,at.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N+1,gt,at.width,at.height,0,It,Mt,at.data)}}else{Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,It,Mt,Q[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,gt,It,Mt,Q[it]);for(let N=0;N<Ht.length;N++){const ot=Ht[N];Ft?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N+1,0,0,It,Mt,ot.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,N+1,gt,It,Mt,ot.image[it])}}}v(E,Wt)&&y(r.TEXTURE_CUBE_MAP),nt.__version=tt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ft(R,E,W,et,tt,nt){const vt=s.convert(W.format,W.colorSpace),lt=s.convert(W.type),mt=M(W.internalFormat,vt,lt,W.colorSpace);if(!n.get(E).__hasExternalTextures){const zt=Math.max(1,E.width>>nt),Q=Math.max(1,E.height>>nt);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,mt,zt,Q,E.depth,0,vt,lt,null):e.texImage2D(tt,nt,mt,zt,Q,0,vt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),_t(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,tt,n.get(W).__webglTexture,0,Dt(E)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,tt,n.get(W).__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(R,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let et=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||_t(E)){const tt=E.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Xn?et=r.DEPTH_COMPONENT32F:tt.type===Wn&&(et=r.DEPTH_COMPONENT24));const nt=Dt(E);_t(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nt,et,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,et,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,et,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const et=Dt(E);W&&_t(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,E.width,E.height):_t(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const et=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0;tt<et.length;tt++){const nt=et[tt],vt=s.convert(nt.format,nt.colorSpace),lt=s.convert(nt.type),mt=M(nt.internalFormat,vt,lt,nt.colorSpace),At=Dt(E);W&&_t(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,E.width,E.height):_t(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,mt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,tt=Dt(E);if(E.depthTexture.format===di)_t(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(E.depthTexture.format===Vi)_t(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function pt(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=r.createRenderbuffer(),Tt(E.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Tt(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(R,E,W){const et=n.get(R);E!==void 0&&ft(et.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&pt(R)}function H(R){const E=R.texture,W=n.get(R),et=n.get(E);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=E.version,o.memory.textures++);const tt=R.isWebGLCubeRenderTarget===!0,nt=R.isWebGLMultipleRenderTargets===!0,vt=m(R)||a;if(tt){W.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[lt]=[];for(let mt=0;mt<E.mipmaps.length;mt++)W.__webglFramebuffer[lt][mt]=r.createFramebuffer()}else W.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)W.__webglFramebuffer[lt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(nt)if(i.drawBuffers){const lt=R.texture;for(let mt=0,At=lt.length;mt<At;mt++){const zt=n.get(lt[mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_t(R)===!1){const lt=nt?E:[E];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<lt.length;mt++){const At=lt[mt];W.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const zt=s.convert(At.format,At.colorSpace),Q=s.convert(At.type),$t=M(At.internalFormat,zt,Q,At.colorSpace,R.isXRRenderTarget===!0),Wt=Dt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,$t,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),q(r.TEXTURE_CUBE_MAP,E,vt);for(let lt=0;lt<6;lt++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)ft(W.__webglFramebuffer[lt][mt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,mt);else ft(W.__webglFramebuffer[lt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);v(E,vt)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const lt=R.texture;for(let mt=0,At=lt.length;mt<At;mt++){const zt=lt[mt],Q=n.get(zt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),q(r.TEXTURE_2D,zt,vt),ft(W.__webglFramebuffer,R,zt,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,0),v(zt,vt)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?lt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,et.__webglTexture),q(lt,E,vt),a&&E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)ft(W.__webglFramebuffer[mt],R,E,r.COLOR_ATTACHMENT0,lt,mt);else ft(W.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,lt,0);v(E,vt)&&y(lt),e.unbindTexture()}R.depthBuffer&&pt(R)}function Pe(R){const E=m(R)||a,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let et=0,tt=W.length;et<tt;et++){const nt=W[et];if(v(nt,E)){const vt=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,lt=n.get(nt).__webglTexture;e.bindTexture(vt,lt),y(vt),e.unbindTexture()}}}function Et(R){if(a&&R.samples>0&&_t(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,et=R.height;let tt=r.COLOR_BUFFER_BIT;const nt=[],vt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=n.get(R),mt=R.isWebGLMultipleRenderTargets===!0;if(mt)for(let At=0;At<E.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let At=0;At<E.length;At++){nt.push(r.COLOR_ATTACHMENT0+At),R.depthBuffer&&nt.push(vt);const zt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(zt===!1&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),mt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,lt.__webglColorRenderbuffer[At]),zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[vt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[vt])),mt){const Q=n.get(E[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,W,et,0,0,W,et,tt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<E.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,lt.__webglColorRenderbuffer[At]);const zt=n.get(E[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Dt(R){return Math.min(i.maxSamples,R.samples)}function _t(R){const E=n.get(R);return a&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Bt(R,E){const W=R.colorSpace,et=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===co||W!==Nn&&W!==Ze&&(Zt.getTransfer(W)===ne?a===!1?t.has("EXT_sRGB")===!0&&et===on?(R.format=co,R.minFilter=Ke,R.generateMipmaps=!1):E=Jl.sRGBToLinear(E):(et!==on||tt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=I,this.setTexture2DArray=K,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=qt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_t}function Jm(r,t,e){const n=e.isWebGL2;function i(s,o=Ze){let a;const l=Zt.getTransfer(o);if(s===jn)return r.UNSIGNED_BYTE;if(s===Vl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Wl)return r.UNSIGNED_SHORT_5_5_5_1;if(s===xh)return r.BYTE;if(s===Mh)return r.SHORT;if(s===yo)return r.UNSIGNED_SHORT;if(s===Gl)return r.INT;if(s===Wn)return r.UNSIGNED_INT;if(s===Xn)return r.FLOAT;if(s===ys)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sh)return r.ALPHA;if(s===on)return r.RGBA;if(s===Eh)return r.LUMINANCE;if(s===bh)return r.LUMINANCE_ALPHA;if(s===di)return r.DEPTH_COMPONENT;if(s===Vi)return r.DEPTH_STENCIL;if(s===co)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wh)return r.RED;if(s===Xl)return r.RED_INTEGER;if(s===Th)return r.RG;if(s===ql)return r.RG_INTEGER;if(s===Yl)return r.RGBA_INTEGER;if(s===Mr||s===Sr||s===Er||s===br)if(l===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jo||s===Ko||s===$o||s===Zo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jo||s===Qo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jo)return l===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qo)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ta||s===ea||s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ta)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ea)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===na)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ia)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sa)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ra)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oa)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aa)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===la)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ca)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ha)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ua)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===da)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fa)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wr||s===pa||s===ma)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===wr)return l===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ma)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ah||s===ga||s===_a||s===va)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===wr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Qm extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class We extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tg={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new We;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class eg extends ji{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const v=[],y=[],M=new Xt;let A=null;const w=new $e;w.layers.enable(1),w.viewport=new Se;const C=new $e;C.layers.enable(2),C.viewport=new Se;const O=[w,C],S=new Qm;S.layers.enable(1),S.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new jr,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new jr,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new jr,v[q]=Z),Z.getHandSpace()};function F(q){const Z=y.indexOf(q.inputSource);if(Z===-1)return;const rt=v[Z];rt!==void 0&&(rt.update(q.inputSource,q.frame,c||o),rt.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const Z=y[q];Z!==null&&(y[q]=null,v[q].disconnect(Z))}b=null,D=null,t.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",U),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new pi(p.framebufferWidth,p.framebufferHeight,{format:on,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,rt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=_.stencil?Vi:di,rt=_.stencil?ui:Wn);const ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new pi(u.textureWidth,u.textureHeight,{format:on,type:jn,depthTexture:new hc(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Tt=t.properties.get(f);Tt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(q){for(let Z=0;Z<q.removed.length;Z++){const rt=q.removed[Z],dt=y.indexOf(rt);dt>=0&&(y[dt]=null,v[dt].disconnect(rt))}for(let Z=0;Z<q.added.length;Z++){const rt=q.added[Z];let dt=y.indexOf(rt);if(dt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=y.length){y.push(rt),dt=Tt;break}else if(y[Tt]===null){y[Tt]=rt,dt=Tt;break}if(dt===-1)break}const ft=v[dt];ft&&ft.connect(rt)}}const P=new z,I=new z;function K(q,Z,rt){P.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(rt.matrixWorld);const dt=P.distanceTo(I),ft=Z.projectionMatrix.elements,Tt=rt.projectionMatrix.elements,Ct=ft[14]/(ft[10]-1),pt=ft[14]/(ft[10]+1),qt=(ft[9]+1)/ft[5],H=(ft[9]-1)/ft[5],Pe=(ft[8]-1)/ft[0],Et=(Tt[8]+1)/Tt[0],Dt=Ct*Pe,_t=Ct*Et,re=dt/(-Pe+Et),Bt=re*-Pe;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Bt),q.translateZ(re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const R=Ct+re,E=pt+re,W=Dt-Bt,et=_t+(dt-Bt),tt=qt*pt/E*R,nt=H*pt/E*R;q.projectionMatrix.makePerspective(W,et,tt,nt,R,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function k(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;S.near=C.near=w.near=q.near,S.far=C.far=w.far=q.far,(b!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,D=S.far);const Z=q.parent,rt=S.cameras;k(S,Z);for(let dt=0;dt<rt.length;dt++)k(rt[dt],Z);rt.length===2?K(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),V(q,S,Z)};function V(q,Z,rt){rt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let $=null;function J(q,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let dt=!1;rt.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let ft=0;ft<rt.length;ft++){const Tt=rt[ft];let Ct=null;if(p!==null)Ct=p.getViewport(Tt);else{const qt=d.getViewSubImage(u,Tt);Ct=qt.viewport,ft===0&&(t.setRenderTargetTextures(f,qt.colorTexture,u.ignoreDepthValues?void 0:qt.depthStencilTexture),t.setRenderTarget(f))}let pt=O[ft];pt===void 0&&(pt=new $e,pt.layers.enable(ft),pt.viewport=new Se,O[ft]=pt),pt.matrix.fromArray(Tt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Tt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ft===0&&(S.matrix.copy(pt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(pt)}}for(let rt=0;rt<v.length;rt++){const dt=y[rt],ft=v[rt];dt!==null&&ft!==void 0&&ft.update(dt,Z,c||o)}$&&$(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const j=new lc;j.setAnimationLoop(J),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}}function ng(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,rc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ze&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ig(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(v,A);const w=t.render.frame;s[v.id]!==w&&(u(v),s[v.id]=w)}function h(v){const y=d();v.__bindingPointIndex=y;const M=r.createBuffer(),A=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],M=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,C=M.length;w<C;w++){const O=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,b=O.length;S<b;S++){const D=O[S];if(p(D,w,S,A)===!0){const F=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let P=0;P<U.length;P++){const I=U[P],K=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,F+L,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,y,M,A){const w=v.value,C=y+"_"+M;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const O=A[C];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return A[C]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(v){const y=v.uniforms;let M=0;const A=16;for(let C=0,O=y.length;C<O;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,D=S.length;b<D;b++){const F=S[b],U=Array.isArray(F.value)?F.value:[F.value];for(let L=0,P=U.length;L<P;L++){const I=U[L],K=_(I),k=M%A;k!==0&&A-k<K.boundary&&(M+=A-k),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=K.storage}}}const w=M%A;return w>0&&(M+=A-w),v.__size=M,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class gc{constructor(t={}){const{canvas:e=Jh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;const y=this;let M=!1,A=0,w=0,C=null,O=-1,S=null;const b=new Se,D=new Se;let F=null;const U=new xt(0);let L=0,P=e.width,I=e.height,K=1,k=null,V=null;const $=new Se(0,0,P,I),J=new Se(0,0,P,I);let j=!1;const q=new wo;let Z=!1,rt=!1,dt=null;const ft=new me,Tt=new Xt,Ct=new z,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qt(){return C===null?K:1}let H=n;function Pe(T,B){for(let X=0;X<T.length;X++){const Y=T[X],G=e.getContext(Y,B);if(G!==null)return G}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",ot,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),H=Pe(B,T),H===null)throw Pe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,Dt,_t,re,Bt,R,E,W,et,tt,nt,vt,lt,mt,At,zt,Q,$t,Wt,It,Mt,gt,Ft,Kt;function le(){Et=new fp(H),Dt=new ap(H,Et,t),Et.init(Dt),gt=new Jm(H,Et,Dt),_t=new $m(H,Et,Dt),re=new gp(H),Bt=new Fm,R=new Zm(H,Et,_t,Bt,Dt,gt,re),E=new cp(y),W=new dp(y),et=new Eu(H,Dt),Ft=new rp(H,Et,et,Dt),tt=new pp(H,et,re,Ft),nt=new xp(H,tt,et,re),Wt=new yp(H,Dt,R),zt=new lp(Bt),vt=new Um(y,E,W,Et,Dt,Ft,zt),lt=new ng(y,Bt),mt=new Bm,At=new Wm(Et,Dt),$t=new sp(y,E,W,_t,nt,u,l),Q=new Km(y,nt,Dt),Kt=new ig(H,re,Dt,_t),It=new op(H,Et,re,Dt),Mt=new mp(H,Et,re,Dt),re.programs=vt.programs,y.capabilities=Dt,y.extensions=Et,y.properties=Bt,y.renderLists=mt,y.shadowMap=Q,y.state=_t,y.info=re}le();const Ht=new eg(y,H);this.xr=Ht,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(P,I,!1))},this.getSize=function(T){return T.set(P,I)},this.setSize=function(T,B,X=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,I=B,e.width=Math.floor(T*K),e.height=Math.floor(B*K),X===!0&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(P*K,I*K).floor()},this.setDrawingBufferSize=function(T,B,X){P=T,I=B,K=X,e.width=Math.floor(T*X),e.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,B,X,Y){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,B,X,Y),_t.viewport(b.copy($).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,B,X,Y){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,B,X,Y),_t.scissor(D.copy(J).multiplyScalar(K).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){_t.setScissorTest(j=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(T=!0,B=!0,X=!0){let Y=0;if(T){let G=!1;if(C!==null){const ht=C.texture.format;G=ht===Yl||ht===ql||ht===Xl}if(G){const ht=C.texture.type,yt=ht===jn||ht===Wn||ht===yo||ht===ui||ht===Vl||ht===Wl,wt=$t.getClearColor(),Lt=$t.getClearAlpha(),kt=wt.r,Nt=wt.g,Ut=wt.b;yt?(p[0]=kt,p[1]=Nt,p[2]=Ut,p[3]=Lt,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=kt,g[1]=Nt,g[2]=Ut,g[3]=Lt,H.clearBufferiv(H.COLOR,0,g))}else Y|=H.COLOR_BUFFER_BIT}B&&(Y|=H.DEPTH_BUFFER_BIT),X&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),mt.dispose(),At.dispose(),Bt.dispose(),E.dispose(),W.dispose(),nt.dispose(),Ft.dispose(),Kt.dispose(),vt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ie),Ht.removeEventListener("sessionend",te),dt&&(dt.dispose(),dt=null),De.stop()};function it(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=re.autoReset,B=Q.enabled,X=Q.autoUpdate,Y=Q.needsUpdate,G=Q.type;le(),re.autoReset=T,Q.enabled=B,Q.autoUpdate=X,Q.needsUpdate=Y,Q.type=G}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const B=T.target;B.removeEventListener("dispose",at),Rt(B)}function Rt(T){bt(T),Bt.remove(T)}function bt(T){const B=Bt.get(T).programs;B!==void 0&&(B.forEach(function(X){vt.releaseProgram(X)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,Y,G,ht){B===null&&(B=pt);const yt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Fc(T,B,X,Y,G);_t.setMaterial(Y,yt);let Lt=X.index,kt=1;if(Y.wireframe===!0){if(Lt=tt.getWireframeAttribute(X),Lt===void 0)return;kt=2}const Nt=X.drawRange,Ut=X.attributes.position;let he=Nt.start*kt,He=(Nt.start+Nt.count)*kt;ht!==null&&(he=Math.max(he,ht.start*kt),He=Math.min(He,(ht.start+ht.count)*kt)),Lt!==null?(he=Math.max(he,0),He=Math.min(He,Lt.count)):Ut!=null&&(he=Math.max(he,0),He=Math.min(He,Ut.count));const ye=He-he;if(ye<0||ye===1/0)return;Ft.setup(G,Y,wt,X,Lt);let xn,oe=It;if(Lt!==null&&(xn=et.get(Lt),oe=Mt,oe.setIndex(xn)),G.isMesh)Y.wireframe===!0?(_t.setLineWidth(Y.wireframeLinewidth*qt()),oe.setMode(H.LINES)):oe.setMode(H.TRIANGLES);else if(G.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),_t.setLineWidth(Gt*qt()),G.isLineSegments?oe.setMode(H.LINES):G.isLineLoop?oe.setMode(H.LINE_LOOP):oe.setMode(H.LINE_STRIP)}else G.isPoints?oe.setMode(H.POINTS):G.isSprite&&oe.setMode(H.TRIANGLES);if(G.isBatchedMesh)oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)oe.renderInstances(he,ye,G.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gr=Math.min(X.instanceCount,Gt);oe.renderInstances(he,ye,gr)}else oe.render(he,ye)};function Jt(T,B,X){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=ze,T.needsUpdate=!0,Cs(T,B,X),T.side=Kn,T.needsUpdate=!0,Cs(T,B,X),T.side=_n):Cs(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),m=At.get(X),m.init(),v.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(y._useLegacyLights);const Y=new Set;return T.traverse(function(G){const ht=G.material;if(ht)if(Array.isArray(ht))for(let yt=0;yt<ht.length;yt++){const wt=ht[yt];Jt(wt,X,G),Y.add(wt)}else Jt(ht,X,G),Y.add(ht)}),v.pop(),m=null,Y},this.compileAsync=function(T,B,X=null){const Y=this.compile(T,B,X);return new Promise(G=>{function ht(){if(Y.forEach(function(yt){Bt.get(yt).currentProgram.isReady()&&Y.delete(yt)}),Y.size===0){G(T);return}setTimeout(ht,10)}Et.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Qt=null;function ve(T){Qt&&Qt(T)}function Ie(){De.stop()}function te(){De.start()}const De=new lc;De.setAnimationLoop(ve),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(T){Qt=T,Ht.setAnimationLoop(T),T===null?De.stop():De.start()},Ht.addEventListener("sessionstart",Ie),Ht.addEventListener("sessionend",te),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(B),B=Ht.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,C),m=At.get(T,v.length),m.init(),v.push(m),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q.setFromProjectionMatrix(ft),rt=this.localClippingEnabled,Z=zt.init(this.clippingPlanes,rt),_=mt.get(T,f.length),_.init(),f.push(_),hn(T,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(k,V),this.info.render.frame++,Z===!0&&zt.beginShadows();const X=m.state.shadowsArray;if(Q.render(X,T,B),Z===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(_,T),m.setupLights(y._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let G=0,ht=Y.length;G<ht;G++){const yt=Y[G];Uo(_,T,yt,yt.viewport)}}else Uo(_,T,B);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,B),Ft.resetDefaultState(),O=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function hn(T,B,X,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){Y&&Ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ft);const yt=nt.update(T),wt=T.material;wt.visible&&_.push(T,yt,wt,X,Ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const yt=nt.update(T),wt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ct.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ct.copy(yt.boundingSphere.center)),Ct.applyMatrix4(T.matrixWorld).applyMatrix4(ft)),Array.isArray(wt)){const Lt=yt.groups;for(let kt=0,Nt=Lt.length;kt<Nt;kt++){const Ut=Lt[kt],he=wt[Ut.materialIndex];he&&he.visible&&_.push(T,yt,he,X,Ct.z,Ut)}}else wt.visible&&_.push(T,yt,wt,X,Ct.z,null)}}const ht=T.children;for(let yt=0,wt=ht.length;yt<wt;yt++)hn(ht[yt],B,X,Y)}function Uo(T,B,X,Y){const G=T.opaque,ht=T.transmissive,yt=T.transparent;m.setupLightsView(X),Z===!0&&zt.setGlobalState(y.clippingPlanes,X),ht.length>0&&Uc(G,ht,B,X),Y&&_t.viewport(b.copy(Y)),G.length>0&&As(G,B,X),ht.length>0&&As(ht,B,X),yt.length>0&&As(yt,B,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Uc(T,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ht=Dt.isWebGL2;dt===null&&(dt=new pi(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?ys:jn,minFilter:vs,samples:ht?4:0})),y.getDrawingBufferSize(Tt),ht?dt.setSize(Tt.x,Tt.y):dt.setSize(cr(Tt.x),cr(Tt.y));const yt=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(U),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const wt=y.toneMapping;y.toneMapping=Yn,As(T,X,Y),R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt);let Lt=!1;for(let kt=0,Nt=B.length;kt<Nt;kt++){const Ut=B[kt],he=Ut.object,He=Ut.geometry,ye=Ut.material,xn=Ut.group;if(ye.side===_n&&he.layers.test(Y.layers)){const oe=ye.side;ye.side=ze,ye.needsUpdate=!0,Fo(he,X,Y,He,ye,xn),ye.side=oe,ye.needsUpdate=!0,Lt=!0}}Lt===!0&&(R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt)),y.setRenderTarget(yt),y.setClearColor(U,L),y.toneMapping=wt}function As(T,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ht=T.length;G<ht;G++){const yt=T[G],wt=yt.object,Lt=yt.geometry,kt=Y===null?yt.material:Y,Nt=yt.group;wt.layers.test(X.layers)&&Fo(wt,B,X,Lt,kt,Nt)}}function Fo(T,B,X,Y,G,ht){T.onBeforeRender(y,B,X,Y,G,ht),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,B,X,Y,T,ht),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=ze,G.needsUpdate=!0,y.renderBufferDirect(X,B,Y,G,T,ht),G.side=Kn,G.needsUpdate=!0,y.renderBufferDirect(X,B,Y,G,T,ht),G.side=_n):y.renderBufferDirect(X,B,Y,G,T,ht),T.onAfterRender(y,B,X,Y,G,ht)}function Cs(T,B,X){B.isScene!==!0&&(B=pt);const Y=Bt.get(T),G=m.state.lights,ht=m.state.shadowsArray,yt=G.state.version,wt=vt.getParameters(T,G.state,ht,B,X),Lt=vt.getProgramCacheKey(wt);let kt=Y.programs;Y.environment=T.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(T.isMeshStandardMaterial?W:E).get(T.envMap||Y.environment),kt===void 0&&(T.addEventListener("dispose",at),kt=new Map,Y.programs=kt);let Nt=kt.get(Lt);if(Nt!==void 0){if(Y.currentProgram===Nt&&Y.lightsStateVersion===yt)return Bo(T,wt),Nt}else wt.uniforms=vt.getUniforms(T),T.onBuild(X,wt,y),T.onBeforeCompile(wt,y),Nt=vt.acquireProgram(wt,Lt),kt.set(Lt,Nt),Y.uniforms=wt.uniforms;const Ut=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=zt.uniform),Bo(T,wt),Y.needsLights=Bc(T),Y.lightsStateVersion=yt,Y.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Nt,Y.uniformsList=null,Nt}function Oo(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ir.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Bo(T,B){const X=Bt.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Fc(T,B,X,Y,G){B.isScene!==!0&&(B=pt),R.resetTextureUnits();const ht=B.fog,yt=Y.isMeshStandardMaterial?B.environment:null,wt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nn,Lt=(Y.isMeshStandardMaterial?W:E).get(Y.envMap||yt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Nt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!X.morphAttributes.position,he=!!X.morphAttributes.normal,He=!!X.morphAttributes.color;let ye=Yn;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=y.toneMapping);const xn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=xn!==void 0?xn.length:0,Gt=Bt.get(Y),gr=m.state.lights;if(Z===!0&&(rt===!0||T!==S)){const Ye=T===S&&Y.id===O;zt.setState(Y,T,Ye)}let ce=!1;Y.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==gr.state.version||Gt.outputColorSpace!==wt||G.isBatchedMesh&&Gt.batching===!1||!G.isBatchedMesh&&Gt.batching===!0||G.isInstancedMesh&&Gt.instancing===!1||!G.isInstancedMesh&&Gt.instancing===!0||G.isSkinnedMesh&&Gt.skinning===!1||!G.isSkinnedMesh&&Gt.skinning===!0||G.isInstancedMesh&&Gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Gt.instancingColor===!1&&G.instanceColor!==null||Gt.envMap!==Lt||Y.fog===!0&&Gt.fog!==ht||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==zt.numPlanes||Gt.numIntersection!==zt.numIntersection)||Gt.vertexAlphas!==kt||Gt.vertexTangents!==Nt||Gt.morphTargets!==Ut||Gt.morphNormals!==he||Gt.morphColors!==He||Gt.toneMapping!==ye||Dt.isWebGL2===!0&&Gt.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,Gt.__version=Y.version);let Jn=Gt.currentProgram;ce===!0&&(Jn=Cs(Y,B,G));let zo=!1,es=!1,_r=!1;const Te=Jn.getUniforms(),Qn=Gt.uniforms;if(_t.useProgram(Jn.program)&&(zo=!0,es=!0,_r=!0),Y.id!==O&&(O=Y.id,es=!0),zo||S!==T){Te.setValue(H,"projectionMatrix",T.projectionMatrix),Te.setValue(H,"viewMatrix",T.matrixWorldInverse);const Ye=Te.map.cameraPosition;Ye!==void 0&&Ye.setValue(H,Ct.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&Te.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,es=!0,_r=!0)}if(G.isSkinnedMesh){Te.setOptional(H,G,"bindMatrix"),Te.setOptional(H,G,"bindMatrixInverse");const Ye=G.skeleton;Ye&&(Dt.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),Te.setValue(H,"boneTexture",Ye.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Te.setOptional(H,G,"batchingTexture"),Te.setValue(H,"batchingTexture",G._matricesTexture,R));const vr=X.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&Dt.isWebGL2===!0)&&Wt.update(G,X,Jn),(es||Gt.receiveShadow!==G.receiveShadow)&&(Gt.receiveShadow=G.receiveShadow,Te.setValue(H,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Qn.envMap.value=Lt,Qn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),es&&(Te.setValue(H,"toneMappingExposure",y.toneMappingExposure),Gt.needsLights&&Oc(Qn,_r),ht&&Y.fog===!0&&lt.refreshFogUniforms(Qn,ht),lt.refreshMaterialUniforms(Qn,Y,K,I,dt),ir.upload(H,Oo(Gt),Qn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ir.upload(H,Oo(Gt),Qn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(H,"center",G.center),Te.setValue(H,"modelViewMatrix",G.modelViewMatrix),Te.setValue(H,"normalMatrix",G.normalMatrix),Te.setValue(H,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ye=Y.uniformsGroups;for(let yr=0,zc=Ye.length;yr<zc;yr++)if(Dt.isWebGL2){const ko=Ye[yr];Kt.update(ko,Jn),Kt.bind(ko,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Oc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Bc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,X){Bt.get(T.texture).__webglTexture=B,Bt.get(T.depthTexture).__webglTexture=X;const Y=Bt.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const X=Bt.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){C=T,A=B,w=X;let Y=!0,G=null,ht=!1,yt=!1;if(T){const Lt=Bt.get(T);Lt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):Lt.__webglFramebuffer===void 0?R.setupRenderTarget(T):Lt.__hasExternalTextures&&R.rebindTextures(T,Bt.get(T.texture).__webglTexture,Bt.get(T.depthTexture).__webglTexture);const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(yt=!0);const Nt=Bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?G=Nt[B][X]:G=Nt[B],ht=!0):Dt.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?G=Bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?G=Nt[X]:G=Nt,b.copy(T.viewport),D.copy(T.scissor),F=T.scissorTest}else b.copy($).multiplyScalar(K).floor(),D.copy(J).multiplyScalar(K).floor(),F=j;if(_t.bindFramebuffer(H.FRAMEBUFFER,G)&&Dt.drawBuffers&&Y&&_t.drawBuffers(T,G),_t.viewport(b),_t.scissor(D),_t.setScissorTest(F),ht){const Lt=Bt.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,X)}else if(yt){const Lt=Bt.get(T.texture),kt=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.__webglTexture,X||0,kt)}O=-1},this.readRenderTargetPixels=function(T,B,X,Y,G,ht,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){_t.bindFramebuffer(H.FRAMEBUFFER,wt);try{const Lt=T.texture,kt=Lt.format,Nt=Lt.type;if(kt!==on&&gt.convert(kt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Nt===ys&&(Et.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Nt!==jn&&gt.convert(Nt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===Xn&&(Dt.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&X>=0&&X<=T.height-G&&H.readPixels(B,X,Y,G,gt.convert(kt),gt.convert(Nt),ht)}finally{const Lt=C!==null?Bt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(H.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(T,B,X=0){const Y=Math.pow(2,-X),G=Math.floor(B.image.width*Y),ht=Math.floor(B.image.height*Y);R.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,T.x,T.y,G,ht),_t.unbindTexture()},this.copyTextureToTexture=function(T,B,X,Y=0){const G=B.image.width,ht=B.image.height,yt=gt.convert(X.format),wt=gt.convert(X.type);R.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,G,ht,yt,wt,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,yt,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,T.x,T.y,yt,wt,B.image),Y===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,Y,G=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ht=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,wt=T.max.z-T.min.z+1,Lt=gt.convert(Y.format),kt=gt.convert(Y.type);let Nt;if(Y.isData3DTexture)R.setTexture3D(Y,0),Nt=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Nt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ut=H.getParameter(H.UNPACK_ROW_LENGTH),he=H.getParameter(H.UNPACK_IMAGE_HEIGHT),He=H.getParameter(H.UNPACK_SKIP_PIXELS),ye=H.getParameter(H.UNPACK_SKIP_ROWS),xn=H.getParameter(H.UNPACK_SKIP_IMAGES),oe=X.isCompressedTexture?X.mipmaps[G]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,oe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,oe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Nt,G,B.x,B.y,B.z,ht,yt,wt,Lt,kt,oe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Nt,G,B.x,B.y,B.z,ht,yt,wt,Lt,oe.data)):H.texSubImage3D(Nt,G,B.x,B.y,B.z,ht,yt,wt,Lt,kt,oe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,he),H.pixelStorei(H.UNPACK_SKIP_PIXELS,He),H.pixelStorei(H.UNPACK_SKIP_ROWS,ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,xn),G===0&&Y.generateMipmaps&&H.generateMipmap(Nt),_t.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,_t.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Mo?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===pr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?fi:Kl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fi?Me:Nn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class sg extends gc{}sg.prototype.isWebGL1Renderer=!0;class Co{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rg extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class og extends Oe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hr extends Fn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new z,u=new z,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],y=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+M,1-y),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const y=h[f][v+1],M=h[f][v],A=h[f+1][v],w=h[f+1][v+1];(f!==0||o>0)&&p.push(y,M,w),(f!==n-1||l<Math.PI)&&p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zs extends Zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Re extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const al={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ag{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const lg=new ag;class Ro{constructor(t){this.manager=t!==void 0?t:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";class cg extends Ro{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=al.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ms("img");function l(){h(),al.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class hg extends Ro{constructor(t){super(t)}load(t,e,n,i){const s=new Oe,o=new cg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Lo extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ug extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new me,ll=new z,cl=new z;class dg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fg extends dg{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fo extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pg extends Lo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg{constructor(t,e,n=0,i=1/0){this.ray=new ec(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return po(t,this,n,e),n.sort(hl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)po(t[i],this,n,e);return n.sort(hl),n}}function hl(r,t){return r.distance-t.distance}function po(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)po(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);class an{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new x);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new x);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new an);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],_=i[0],m=i[1],f=i[2],v=i[3],y=i[4],M=i[5],A=i[6],w=i[7],C=i[8];return s[0]=o*_+a*v+l*A,s[1]=o*m+a*y+l*w,s[2]=o*f+a*M+l*C,s[3]=c*_+h*v+d*A,s[4]=c*m+h*y+d*w,s[5]=c*f+h*M+d*C,s[6]=u*_+p*v+g*A,s[7]=u*m+p*y+g*w,s[8]=u*f+p*M+g*C,e}scale(t,e){e===void 0&&(e=new an);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new x);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const p=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*p;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new an);const e=3,n=6,i=gg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,p=n*l,g=i*l,_=s*o,m=s*a,f=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+m,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=p-_,v[3*2+0]=d-m,v[3*2+1]=p+_,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new an);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const gg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class x{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new x);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new x(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new x(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new an([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new x);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new x);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new x),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new x),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new x),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=_g,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=vg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(ul),ul.almostEquals(t,e)}clone(){return new x(this.x,this.y,this.z)}}x.ZERO=new x(0,0,0);x.UNIT_X=new x(1,0,0);x.UNIT_Y=new x(0,1,0);x.UNIT_Z=new x(0,0,1);const _g=new x,vg=new x,ul=new x;class qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new x,this.upperBound=new x,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,dl),c=dl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=fl,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=fl,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||p>g)}}const dl=new x,fl=[new x,new x,new x,new x,new x,new x,new x,new x];class pl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class _c{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class fe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new x),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=yg,i=xg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new fe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new fe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new fe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new x);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,p=-o*n-a*i-l*s;return e.x=h*c+p*-o+d*-l-u*-a,e.y=d*c+p*-a+u*-o-h*-l,e.z=u*c+p*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,p=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new fe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new fe);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,p,g,_,m;return p=i*l+s*c+o*h+a*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),_=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(_=1-e,m=e),n.x=_*i+m*l,n.y=_*s+m*c,n.z=_*o+m*h,n.w=_*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new fe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const yg=new x,xg=new x,Mg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ut{constructor(t){t===void 0&&(t={}),this.id=ut.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ut.idCounter=0;ut.types=Mg;class Yt{constructor(t){t===void 0&&(t={}),this.position=new x,this.quaternion=new fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new x),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new x),n.vsub(t,i),e.conjugate(ml),ml.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new x),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new x),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new x),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const ml=new fe;class gs extends ut{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:ut.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new x;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new x;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];gs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new x,o=new x;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new x;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new x;m.copy(_),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new x,h=new x,d=new x,u=new x,p=new x,g=new x;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],c);const v=m.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const f=a?a.length:m.faces.length;for(let v=0;v<f;v++){const y=a?a[v]:v;c.copy(m.faceNormals[y]),n.vmult(c,c);const M=m.testSepAxis(c,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(c))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){s.vmult(t.uniqueAxes[f],h);const v=m.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const f=l?l.length:t.faces.length;for(let v=0;v<f;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const M=m.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<_&&(_=M,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],p),u.cross(p,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;gs.project(a,t,n,i,$r),gs.project(e,t,s,o,Zr);const l=$r[0],c=$r[1],h=Zr[0],d=Zr[1];if(l<d||h<c)return!1;const u=l-d,p=h-c;return u<p?u:p}calculateLocalInertia(t,e){const n=new x,i=new x;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new x,c=new x,h=new x,d=new x,u=new x,p=new x,g=new x,_=new x,m=this,f=[],v=i,y=f;let M=-1,A=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){l.copy(m.faceNormals[b]),n.vmult(l,l);const D=l.dot(t);D<A&&(A=D,M=b)}if(M<0)return;const w=m.faces[M];w.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let D=0;D<m.faces[b].length;D++)w.indexOf(m.faces[b][D])!==-1&&b!==M&&w.connectedFaces.indexOf(b)===-1&&w.connectedFaces.push(b);const C=w.length;for(let b=0;b<C;b++){const D=m.vertices[w[b]],F=m.vertices[w[(b+1)%C]];D.vsub(F,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(D),n.vmult(p,p),e.vadd(p,p);const U=w.connectedFaces[b];g.copy(this.faceNormals[U]);const L=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const P=L-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,P);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[M]);const O=this.getPlaneConstantOfFace(M);_.copy(g),n.vmult(_,_);const S=O-_.dot(e);for(let b=0;b<v.length;b++){let D=_.dot(v[b])+S;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=o){const F=v[b];if(D<=1e-6){const U={point:F,normal:_,depth:D};a.push(U)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new x;d.copy(c),e.push(d)}else{const d=new x;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new x;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new x);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new x);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new x;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new x);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new x;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new x;t.vsub(l,c);const h=a.dot(c),d=new x;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Sg;let l=0,c=0;const h=Eg,d=t.vertices;h.setZero(),Yt.vectorToLocalFrame(n,i,e,a),Yt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const p=c;c=l,l=p}s[0]=l,s[1]=c}}const $r=[],Zr=[];new x;const Sg=new x,Eg=new x;class $n extends ut{constructor(t){super({type:ut.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=x,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new gs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new x),$n.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Gn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Gn,Gn),t.vadd(Gn,Gn),n(Gn.x,Gn.y,Gn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;un[0].set(s.x,s.y,s.z),un[1].set(-s.x,s.y,s.z),un[2].set(-s.x,-s.y,s.z),un[3].set(-s.x,-s.y,-s.z),un[4].set(s.x,-s.y,-s.z),un[5].set(s.x,s.y,-s.z),un[6].set(-s.x,s.y,-s.z),un[7].set(s.x,-s.y,s.z);const o=un[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=un[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Gn=new x,un=[new x,new x,new x,new x,new x,new x,new x,new x],Po={DYNAMIC:1,STATIC:2,KINEMATIC:4},Io={AWAKE:0,SLEEPY:1,SLEEPING:2};class ct extends _c{constructor(t){t===void 0&&(t={}),super(),this.id=ct.idCounter++,this.index=-1,this.world=null,this.vlambda=new x,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new x,this.previousPosition=new x,this.interpolatedPosition=new x,this.initPosition=new x,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new x,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new x,this.force=new x;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ct.STATIC:ct.DYNAMIC,typeof t.type==typeof ct.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ct.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new x,this.quaternion=new fe,this.initQuaternion=new fe,this.previousQuaternion=new fe,this.interpolatedQuaternion=new fe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new x,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new x,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new x,this.invInertia=new x,this.invInertiaWorld=new an,this.invMassSolve=0,this.invInertiaSolve=new x,this.invInertiaWorldSolve=new an,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new x(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new x(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new x,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ct.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ct.SLEEPING&&this.dispatchEvent(ct.wakeupEvent)}sleep(){this.sleepState=ct.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ct.AWAKE&&n<i?(this.sleepState=ct.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ct.sleepyEvent)):e===ct.SLEEPY&&n>i?this.wakeUp():e===ct.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ct.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ct.SLEEPING||this.type===ct.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new x),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new x),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new x),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new x),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new x,s=new fe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=bg,o=wg,a=this.quaternion,l=this.aabb,c=Tg;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ag,i=Cg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new x),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=Rg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new x),this.type!==ct.DYNAMIC)return;const n=Lg,i=Pg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ct.DYNAMIC&&(this.sleepState===ct.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new x),this.type!==ct.DYNAMIC)return;this.sleepState===ct.SLEEPING&&this.wakeUp();const n=e,i=Ig;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Dg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new x),this.type!==ct.DYNAMIC)return;const n=Ng,i=Ug;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Fg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),$n.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new x;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ct.DYNAMIC||this.type===ct.KINEMATIC)||this.sleepState===ct.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const g=d.elements,_=this.angularFactor,m=l.x*_.x,f=l.y*_.y,v=l.z*_.z;s.x+=t*(g[0]*m+g[1]*f+g[2]*v),s.y+=t*(g[3]*m+g[4]*f+g[5]*v),s.z+=t*(g[6]*m+g[7]*f+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ct.idCounter=0;ct.COLLIDE_EVENT_NAME="collide";ct.DYNAMIC=Po.DYNAMIC;ct.STATIC=Po.STATIC;ct.KINEMATIC=Po.KINEMATIC;ct.AWAKE=Io.AWAKE;ct.SLEEPY=Io.SLEEPY;ct.SLEEPING=Io.SLEEPING;ct.wakeupEvent={type:"wakeup"};ct.sleepyEvent={type:"sleepy"};ct.sleepEvent={type:"sleep"};const bg=new x,wg=new fe,Tg=new qe,Ag=new an,Cg=new an;new an;const Rg=new x,Lg=new x,Pg=new x,Ig=new x,Dg=new x,Ng=new x,Ug=new x,Fg=new x;class vc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ct.STATIC||t.sleepState===ct.SLEEPING)&&(e.type&ct.STATIC||e.sleepState===ct.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Og;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Bg,i=zg,s=kg,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new x;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Og=new x;new x;new fe;new x;const Bg={keys:[]},zg=[],kg=[];new x;new x;new x;class Hg extends vc{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ur{constructor(){this.rayFromWorld=new x,this.rayToWorld=new x,this.hitNormalWorld=new x,this.hitPointWorld=new x,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let yc,xc,Mc,Sc,Ec,bc,wc;const Do={CLOSEST:1,ANY:2,ALL:4};yc=ut.types.SPHERE;xc=ut.types.PLANE;Mc=ut.types.BOX;Sc=ut.types.CYLINDER;Ec=ut.types.CONVEXPOLYHEDRON;bc=ut.types.HEIGHTFIELD;wc=ut.types.TRIMESH;class de{get[yc](){return this._intersectSphere}get[xc](){return this._intersectPlane}get[Mc](){return this._intersectBox}get[Sc](){return this._intersectConvex}get[Ec](){return this._intersectConvex}get[bc](){return this._intersectHeightfield}get[wc](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new x),e===void 0&&(e=new x),this.from=t.clone(),this.to=e.clone(),this.direction=new x,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=de.ANY,this.result=new ur,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||de.ANY,this.result=e.result||new ur,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(gl),Jr.length=0,t.broadphase.aabbQuery(t,gl,Jr),this.intersectBodies(Jr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Gg,s=Vg;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(i0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new x(0,0,1);e.vmult(c,c);const h=new x;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const p=c.dot(l);if(Math.abs(p)<this.precision)return;const g=new x,_=new x,m=new x;o.vsub(n,g);const f=-c.dot(g)/p;l.scale(f,_),o.vadd(_,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Wg;o.from.copy(this.from),o.to.copy(this.to),Yt.pointToLocalFrame(n,e,o.from,o.from),Yt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Xg;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new qe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=l;p<h;p++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,Js),this._intersectConvex(t.pillarConvex,e,Js,i,s,_l),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,Js),this._intersectConvex(t.pillarConvex,e,Js,i,s,_l)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,p=qg,g=Yg;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=jg,l=vl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<f;y++){const M=c?c[y]:y,A=h[M],w=u[M],C=e,O=n;l.copy(d[A[0]]),C.vmult(l,l),l.vadd(O,l),l.vsub(g,l),C.vmult(w,a);const S=p.dot(a);if(Math.abs(S)<this.precision)continue;const b=a.dot(l)/S;if(!(b<0)){p.scale(b,Be),Be.vadd(g,Be),nn.copy(d[A[0]]),C.vmult(nn,nn),O.vadd(nn,nn);for(let D=1;!v.shouldStop&&D<A.length-1;D++){dn.copy(d[A[D]]),fn.copy(d[A[D+1]]),C.vmult(dn,dn),C.vmult(fn,fn),O.vadd(dn,dn),O.vadd(fn,fn);const F=Be.distanceTo(g);!(de.pointInTriangle(Be,nn,dn,fn)||de.pointInTriangle(Be,dn,nn,fn))||F>m||this.reportIntersection(a,Be,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Kg,l=e0,c=n0,h=vl,d=$g,u=Zg,p=Jg,g=t0,_=Qg,m=t.indices;t.vertices;const f=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,y,d),Yt.pointToLocalFrame(n,e,f,u),Yt.pointToLocalFrame(n,e,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const M=u.distanceSquared(p);t.tree.rayQuery(this,c,l);for(let A=0,w=l.length;!this.result.shouldStop&&A!==w;A++){const C=l[A];t.getNormal(C,a),t.getVertex(m[C*3],nn),nn.vsub(u,h);const O=d.dot(a),S=a.dot(h)/O;if(S<0)continue;d.scale(S,Be),Be.vadd(u,Be),t.getVertex(m[C*3+1],dn),t.getVertex(m[C*3+2],fn);const b=Be.distanceSquared(u);!(de.pointInTriangle(Be,dn,nn,fn)||de.pointInTriangle(Be,nn,dn,fn))||b>M||(Yt.vectorToWorldFrame(e,a,_),Yt.pointToWorldFrame(n,e,Be,g),this.reportIntersection(_,g,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case de.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case de.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case de.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ci),n.vsub(e,os),t.vsub(e,Qr);const s=ci.dot(ci),o=ci.dot(os),a=ci.dot(Qr),l=os.dot(os),c=os.dot(Qr);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}de.CLOSEST=Do.CLOSEST;de.ANY=Do.ANY;de.ALL=Do.ALL;const gl=new qe,Jr=[],os=new x,Qr=new x,Gg=new x,Vg=new fe,Be=new x,nn=new x,dn=new x,fn=new x;new x;new ur;const _l={faceList:[0]},Js=new x,Wg=new de,Xg=[],qg=new x,Yg=new x,jg=new x;new x;new x;const vl=new x,Kg=new x,$g=new x,Zg=new x,Jg=new x,Qg=new x,t0=new x;new qe;const e0=[],n0=new Yt,ci=new x,Qs=new x;function i0(r,t,e){e.vsub(r,ci);const n=ci.dot(t);return t.scale(n,Qs),Qs.vadd(r,Qs),e.distanceTo(Qs)}class Bi extends vc{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Bi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Bi.insertionSortX(t):e===1?Bi.insertionSortY(t):e===2&&Bi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let p=0;p!==l;p++){const g=a[p],_=g.position.x;t+=_,e+=_*_;const m=g.position.y;n+=m,i+=m*m;const f=g.position.z;s+=f,o+=f*f}const h=e-t*t*c,d=i-n*n*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class s0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class yl{constructor(){this.spatial=new x,this.rotational=new x}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class bs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=bs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new yl,this.jacobianElementB=new yl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,xl),a.scale(h,Ml),n.invInertiaWorldSolve.vmult(o,Sl),i.invInertiaWorldSolve.vmult(l,El),t.multiplyVectors(xl,Sl)+e.multiplyVectors(Ml,El)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,tr),c+=tr.dot(t.rotational),l.vmult(e.rotational,tr),c+=tr.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=r0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}bs.idCounter=0;const xl=new x,Ml=new x,Sl=new x,El=new x,tr=new x,r0=new x;class o0 extends bs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new x,this.rj=new x,this.ni=new x}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=a0,c=l0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=c0,_=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(f),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=f.dot(g),y=this.restitution+1,M=y*u.dot(f)-y*h.dot(f)+p.dot(c)-d.dot(l),A=this.computeGiMf();return-v*e-M*n-t*A}getImpactVelocityAlongNormal(){const t=h0,e=u0,n=d0,i=f0,s=p0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const a0=new x,l0=new x,c0=new x,h0=new x,u0=new x,d0=new x,f0=new x,p0=new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;class bl extends bs{constructor(t,e,n){super(t,e,-n,n),this.ri=new x,this.rj=new x,this.t=new x}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=m0,o=g0,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const m0=new x,g0=new x;class Qi{constructor(t,e,n){n=s0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Qi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Qi.idCounter=0;class Zn{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Zn.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Zn.idCounter=0;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new de;new x;new x;new x;new x(1,0,0),new x(0,1,0),new x(0,0,1);new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;class mo extends ut{constructor(t){if(super({type:ut.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new x);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new x;new qe;new x;new qe;new x;new x;new x;new x;new x;new x;new x;new qe;new x;new Yt;new qe;class _0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class v0 extends _0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,p,g,_,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const f=x0,v=M0,y=y0;f.length=a,v.length=a,y.length=a;for(let M=0;M!==a;M++){const A=o[M];y[M]=0,v[M]=A.computeB(h),f[M]=1/A.computeC()}if(a!==0){for(let w=0;w!==c;w++){const C=l[w],O=C.vlambda,S=C.wlambda;O.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let w=0;w!==a;w++){const C=o[w];d=v[w],u=f[w],m=y[w],_=C.computeGWlambda(),p=u*(d-_-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),y[w]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let w=0;w!==c;w++){const C=l[w],O=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),O.vadd(C.vlambda,O),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let M=o.length;const A=1/h;for(;M--;)o[M].multiplier=y[M]*A}return n}}const y0=[],x0=[],M0=[];class S0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class E0 extends S0{constructor(){super(...arguments),this.type=x}constructObject(){return new x}}const ee={sphereSphere:ut.types.SPHERE,spherePlane:ut.types.SPHERE|ut.types.PLANE,boxBox:ut.types.BOX|ut.types.BOX,sphereBox:ut.types.SPHERE|ut.types.BOX,planeBox:ut.types.PLANE|ut.types.BOX,convexConvex:ut.types.CONVEXPOLYHEDRON,sphereConvex:ut.types.SPHERE|ut.types.CONVEXPOLYHEDRON,planeConvex:ut.types.PLANE|ut.types.CONVEXPOLYHEDRON,boxConvex:ut.types.BOX|ut.types.CONVEXPOLYHEDRON,sphereHeightfield:ut.types.SPHERE|ut.types.HEIGHTFIELD,boxHeightfield:ut.types.BOX|ut.types.HEIGHTFIELD,convexHeightfield:ut.types.CONVEXPOLYHEDRON|ut.types.HEIGHTFIELD,sphereParticle:ut.types.PARTICLE|ut.types.SPHERE,planeParticle:ut.types.PLANE|ut.types.PARTICLE,boxParticle:ut.types.BOX|ut.types.PARTICLE,convexParticle:ut.types.PARTICLE|ut.types.CONVEXPOLYHEDRON,cylinderCylinder:ut.types.CYLINDER,sphereCylinder:ut.types.SPHERE|ut.types.CYLINDER,planeCylinder:ut.types.PLANE|ut.types.CYLINDER,boxCylinder:ut.types.BOX|ut.types.CYLINDER,convexCylinder:ut.types.CONVEXPOLYHEDRON|ut.types.CYLINDER,heightfieldCylinder:ut.types.HEIGHTFIELD|ut.types.CYLINDER,particleCylinder:ut.types.PARTICLE|ut.types.CYLINDER,sphereTrimesh:ut.types.SPHERE|ut.types.TRIMESH,planeTrimesh:ut.types.PLANE|ut.types.TRIMESH};class b0{get[ee.sphereSphere](){return this.sphereSphere}get[ee.spherePlane](){return this.spherePlane}get[ee.boxBox](){return this.boxBox}get[ee.sphereBox](){return this.sphereBox}get[ee.planeBox](){return this.planeBox}get[ee.convexConvex](){return this.convexConvex}get[ee.sphereConvex](){return this.sphereConvex}get[ee.planeConvex](){return this.planeConvex}get[ee.boxConvex](){return this.boxConvex}get[ee.sphereHeightfield](){return this.sphereHeightfield}get[ee.boxHeightfield](){return this.boxHeightfield}get[ee.convexHeightfield](){return this.convexHeightfield}get[ee.sphereParticle](){return this.sphereParticle}get[ee.planeParticle](){return this.planeParticle}get[ee.boxParticle](){return this.boxParticle}get[ee.convexParticle](){return this.convexParticle}get[ee.cylinderCylinder](){return this.convexConvex}get[ee.sphereCylinder](){return this.sphereConvex}get[ee.planeCylinder](){return this.planeConvex}get[ee.boxCylinder](){return this.boxConvex}get[ee.convexCylinder](){return this.convexConvex}get[ee.heightfieldCylinder](){return this.heightfieldCylinder}get[ee.particleCylinder](){return this.particleCylinder}get[ee.sphereTrimesh](){return this.sphereTrimesh}get[ee.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new E0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new o0(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,_=g.length?g.pop():new bl(n,i,u*p),m=g.length?g.pop():new bl(n,i,u*p);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-u*p,_.maxForce=m.maxForce=u*p,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];si.setZero(),Di.setZero(),Ni.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(si.vadd(e.ni,si),Di.vadd(e.ri,Di),Ni.vadd(e.rj,Ni)):(si.vsub(e.ni,si),Di.vadd(e.rj,Di),Ni.vadd(e.ri,Ni));const o=1/t;Di.scale(o,n.ri),Ni.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),si.normalize(),si.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=A0,c=C0,h=w0,d=T0;for(let u=0,p=t.length;u!==p;u++){const g=t[u],_=e[u];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const f=g.type&ct.KINEMATIC&&_.type&ct.STATIC||g.type&ct.STATIC&&_.type&ct.KINEMATIC||g.type&ct.KINEMATIC&&_.type&ct.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],c),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const A=_.shapes[M];if(!(y.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+A.boundingSphereRadius)continue;let w=null;y.material&&A.material&&(w=n.getContactMaterial(y.material,A.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;const C=y.type|A.type,O=this[C];if(O){let S=!1;y.type<A.type?S=O.call(this,y,A,h,d,l,c,g,_,y,A,f):S=O.call(this,A,y,d,h,c,l,_,g,y,A,f),S&&f&&(n.shapeOverlapKeeper.set(y.id,A.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,er),u.ni.scale(u.ni.dot(er),wl),er.vsub(wl,u.rj),-er.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,p=t_;n.vsub(i,nr),e.getSideNormals(p,o);const g=t.radius;let _=!1;const m=n_,f=i_,v=s_;let y=null,M=0,A=0,w=0,C=null;for(let I=0,K=p.length;I!==K&&_===!1;I++){const k=Z0;k.copy(p[I]);const V=k.length();k.normalize();const $=nr.dot(k);if($<V+g&&$>0){const J=J0,j=Q0;J.copy(p[(I+1)%3]),j.copy(p[(I+2)%3]);const q=J.length(),Z=j.length();J.normalize(),j.normalize();const rt=nr.dot(J),dt=nr.dot(j);if(rt<q&&rt>-q&&dt<Z&&dt>-Z){const ft=Math.abs($-V-g);if((C===null||ft<C)&&(C=ft,A=rt,w=dt,y=V,m.copy(k),f.copy(J),v.copy(j),M++,d))return!0}}}if(M){_=!0;const I=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,I.ri),I.ni.copy(m),I.ni.negate(I.ni),m.scale(y,m),f.scale(A,f),m.vadd(f,m),v.scale(w,v),m.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let O=u.get();const S=e_;for(let I=0;I!==2&&!_;I++)for(let K=0;K!==2&&!_;K++)for(let k=0;k!==2&&!_;k++)if(O.set(0,0,0),I?O.vadd(p[0],O):O.vsub(p[0],O),K?O.vadd(p[1],O):O.vsub(p[1],O),k?O.vadd(p[2],O):O.vsub(p[2],O),i.vadd(O,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;_=!0;const V=this.createContactEquation(a,l,t,e,c,h);V.ri.copy(S),V.ri.normalize(),V.ni.copy(V.ri),V.ri.scale(g,V.ri),V.rj.copy(O),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.vadd(i,V.rj),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}u.release(O),O=null;const b=u.get(),D=u.get(),F=u.get(),U=u.get(),L=u.get(),P=p.length;for(let I=0;I!==P&&!_;I++)for(let K=0;K!==P&&!_;K++)if(I%3!==K%3){p[K].cross(p[I],b),b.normalize(),p[I].vadd(p[K],D),F.copy(n),F.vsub(D,F),F.vsub(i,F);const k=F.dot(b);b.scale(k,U);let V=0;for(;V===I%3||V===K%3;)V++;L.copy(n),L.vsub(U,L),L.vsub(D,L),L.vsub(i,L);const $=Math.abs(k),J=L.length();if($<p[V].length()&&J<g){if(d)return!0;_=!0;const j=this.createContactEquation(a,l,t,e,c,h);D.vadd(U,j.rj),j.rj.copy(j.rj),L.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(i,j.ri),j.ri.vsub(n,j.ri),j.ri.normalize(),j.ri.scale(g,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}u.release(b,D,F,U,L)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,p){const g=y_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,p)){const _=[],m=x_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),M=y.ri,A=y.rj;g.negate(y.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,M),A.copy(_[v].point),M.vsub(n,M),A.vsub(i,A),M.vadd(n,M),M.vsub(a.position,M),A.vadd(i,A),A.vsub(l.position,A),this.result.push(y),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,r_);const p=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let f=!1;for(let v=0;v!==_.length;v++){const y=_[v],M=c_;o.vmult(y,M),i.vadd(M,M);const A=l_;if(M.vsub(n,A),A.lengthSquared()<m*m){if(d)return!0;f=!0;const w=this.createContactEquation(a,l,t,e,c,h);w.ri.copy(A),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),M.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&f===!1;v++){const M=p[v],A=g[v],w=h_;o.vmult(M,w);const C=u_;o.vmult(_[A[0]],C),C.vadd(i,C);const O=d_;w.scale(-m,O),n.vadd(O,O);const S=f_;O.vsub(C,S);const b=S.dot(w),D=p_;if(n.vsub(C,D),b<0&&D.dot(w)>0){const F=[];for(let U=0,L=A.length;U!==L;U++){const P=u.get();o.vmult(_[A[U]],P),i.vadd(P,P),F.push(P)}if($0(F,w,n)){if(d)return!0;f=!0;const U=this.createContactEquation(a,l,t,e,c,h);w.scale(-m,U.ri),w.negate(U.ni);const L=u.get();w.scale(-b,L);const P=u.get();w.scale(-m,P),n.vsub(i,U.rj),U.rj.vadd(P,U.rj),U.rj.vadd(L,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),u.release(L),u.release(P),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let I=0,K=F.length;I!==K;I++)u.release(F[I]);return}else for(let U=0;U!==A.length;U++){const L=u.get(),P=u.get();o.vmult(_[A[(U+1)%A.length]],L),o.vmult(_[A[(U+2)%A.length]],P),i.vadd(L,L),i.vadd(P,P);const I=o_;P.vsub(L,I);const K=a_;I.unit(K);const k=u.get(),V=u.get();n.vsub(L,V);const $=V.dot(K);K.scale($,k),k.vadd(L,k);const J=u.get();if(k.vsub(n,J),$>0&&$*$<I.lengthSquared()&&J.lengthSquared()<m*m){if(d)return!0;const j=this.createContactEquation(a,l,t,e,c,h);k.vsub(i,j.rj),k.vsub(n,j.ni),j.ni.normalize(),j.ni.scale(m,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let q=0,Z=F.length;q!==Z;q++)u.release(F[q]);u.release(L),u.release(P),u.release(k),u.release(J),u.release(V);return}u.release(L),u.release(P),u.release(k),u.release(J),u.release(V)}for(let U=0,L=F.length;U!==L;U++)u.release(F[U])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=m_,p=g_;p.set(0,0,1),s.vmult(p,p);let g=0;const _=__;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),p.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),y=v_;p.scale(p.dot(_),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(p),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,p=t.radius,g=e.elementSize,_=I_,m=P_;Yt.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,v=Math.ceil((m.x+p)/g)+1,y=Math.floor((m.y-p)/g)-1,M=Math.ceil((m.y+p)/g)+1;if(v<0||M<0||f>u.length||y>u[0].length)return;f<0&&(f=0),v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const A=[];e.getRectMinMax(f,y,v,M,A);const w=A[0],C=A[1];if(m.z-p>C||m.z+p<w)return;const O=this.result;for(let S=f;S<v;S++)for(let b=y;b<M;b++){const D=O.length;let F=!1;if(e.getConvexTrianglePillar(S,b,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&F||(e.getConvexTrianglePillar(S,b,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&F))return!0;if(O.length-D>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,_=R_,m=L_,f=C_;Yt.pointToLocalFrame(i,o,n,f);let v=Math.floor((f.x-g)/p)-1,y=Math.ceil((f.x+g)/p)+1,M=Math.floor((f.y-g)/p)-1,A=Math.ceil((f.y+g)/p)+1;if(y<0||A<0||v>u.length||M>u[0].length)return;v<0&&(v=0),y<0&&(y=0),M<0&&(M=0),A<0&&(A=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),A>=u[0].length&&(A=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const w=[];e.getRectMinMax(v,M,y,A,w);const C=w[0],O=w[1];if(!(f.z-g>O||f.z+g<C))for(let S=v;S<y;S++)for(let b=M;b<A;b++){let D=!1;if(e.getConvexTrianglePillar(S,b,!1),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&D||(e.getConvexTrianglePillar(S,b,!0),Yt.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&D))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=b_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=M_;u.set(0,0,1),a.quaternion.vmult(u,u);const p=S_;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=E_;u.scale(u.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const p=T_,g=A_;let _=null;const m=w_;if(m.copy(i),m.vsub(n,m),s.conjugate(Tl),Tl.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let f=0,v=t.faces.length;f!==v;f++){const y=[t.worldVertices[t.faces[f][0]]],M=t.worldFaceNormals[f];i.vsub(y[0],Al);const A=-M.dot(Al);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,u=f,p.copy(M)}}if(u!==-1){const f=this.createContactEquation(l,a,e,t,c,h);p.scale(_,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,y=f.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=F0,p=O0,g=B0,_=z0,m=k0,f=H0,v=X0,y=U0,M=D0,A=q0;Yt.pointToLocalFrame(i,o,n,m);const w=t.radius;v.lowerBound.set(m.x-w,m.y-w,m.z-w),v.upperBound.set(m.x+w,m.y+w,m.z+w),e.getTrianglesInAABB(v,A);const C=N0,O=t.radius*t.radius;for(let U=0;U<A.length;U++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[A[U]*3+L],C),C.vsub(m,M),M.lengthSquared()<=O){if(y.copy(C),Yt.pointToWorldFrame(i,o,y,C),C.vsub(n,M),d)return!0;let P=this.createContactEquation(a,l,t,e,c,h);P.ni.copy(M),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(t.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),P.rj.copy(C),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let U=0;U<A.length;U++)for(let L=0;L<3;L++){e.getVertex(e.indices[A[U]*3+L],u),e.getVertex(e.indices[A[U]*3+(L+1)%3],p),p.vsub(u,g),m.vsub(p,f);const P=f.dot(g);m.vsub(u,f);let I=f.dot(g);if(I>0&&P<0&&(m.vsub(u,f),_.copy(g),_.normalize(),I=f.dot(_),_.scale(I,f),f.vadd(u,f),f.distanceTo(m)<t.radius)){if(d)return!0;const k=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),Yt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,k.rj),Yt.vectorToWorldFrame(o,k.ni,k.ni),Yt.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const S=G0,b=V0,D=W0,F=I0;for(let U=0,L=A.length;U!==L;U++){e.getTriangleVertices(A[U],S,b,D),e.getNormal(A[U],F),m.vsub(S,f);let P=f.dot(F);if(F.scale(P,f),m.vsub(f,f),P=f.distanceTo(m),de.pointInTriangle(f,S,b,D)&&P<t.radius){if(d)return!0;let I=this.createContactEquation(a,l,t,e,c,h);f.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),Yt.pointToWorldFrame(i,o,f,f),f.vsub(l.position,I.rj),Yt.vectorToWorldFrame(o,I.ni,I.ni),Yt.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new x,p=R0;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new x;_.copy(u),Yt.pointToWorldFrame(i,o,_,u);const m=L0;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(p);const y=P0;p.scale(m.dot(p),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const si=new x,Di=new x,Ni=new x,w0=new x,T0=new x,A0=new fe,C0=new fe,R0=new x,L0=new x,P0=new x,I0=new x,D0=new x;new x;const N0=new x,U0=new x,F0=new x,O0=new x,B0=new x,z0=new x,k0=new x,H0=new x,G0=new x,V0=new x,W0=new x,X0=new qe,q0=[],er=new x,wl=new x,Y0=new x,j0=new x,K0=new x;function $0(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Y0;r[(s+1)%i].vsub(o,a);const l=j0;a.cross(t,l);const c=K0;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const nr=new x,Z0=new x,J0=new x,Q0=new x,t_=[new x,new x,new x,new x,new x,new x],e_=new x,n_=new x,i_=new x,s_=new x,r_=new x,o_=new x,a_=new x,l_=new x,c_=new x,h_=new x,u_=new x,d_=new x,f_=new x,p_=new x;new x;new x;const m_=new x,g_=new x,__=new x,v_=new x,y_=new x,x_=new x,M_=new x,S_=new x,E_=new x,b_=new x,Tl=new fe,w_=new x;new x;const T_=new x,Al=new x,A_=new x,C_=new x,R_=new x,L_=[0],P_=new x,I_=new x;class Cl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Rl(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Rl(e,h)}}}function Rl(r,t){r.push((t&4294901760)>>16,t&65535)}const to=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class D_{constructor(){this.data={keys:[]}}get(t,e){const n=to(t,e);return this.data[n]}set(t,e,n){const i=to(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=to(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}let N_=class extends _c{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new x,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new x,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Hg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new v0,this.constraints=[],this.narrowphase=new b0(this),this.collisionMatrix=new pl,this.collisionMatrixPrevious=new pl,this.bodyOverlapKeeper=new Cl,this.shapeOverlapKeeper=new Cl,this.contactmaterials=[],this.contactMaterialTable=new D_,this.defaultMaterial=new Zn("default"),this.defaultContactMaterial=new Qi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ur?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ALL,n.from=t,n.to=e,n.callback=i,eo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=de.ANY,n.from=t,n.to=e,n.result=i,eo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=de.CLOSEST,n.from=t,n.to=e,n.result=i,eo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ct&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=pe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=z_,i=k_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=ct.DYNAMIC;let u=-1/0;const p=this.constraints,g=B_;l.length();const _=l.x,m=l.y,f=l.z;let v=0;for(c&&(u=pe.now()),v=0;v!==s;v++){const U=o[v];if(U.type===d){const L=U.force,P=U.mass;L.x+=P*_,L.y+=P*m,L.z+=P*f}}for(let U=0,L=this.subsystems.length;U!==L;U++)this.subsystems[U].update();c&&(u=pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=pe.now()-u);let y=p.length;for(v=0;v!==y;v++){const U=p[v];if(!U.collideConnected)for(let L=n.length-1;L>=0;L-=1)(U.bodyA===n[L]&&U.bodyB===i[L]||U.bodyB===n[L]&&U.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(u=pe.now());const M=O_,A=e.length;for(v=0;v!==A;v++)M.push(e[v]);e.length=0;const w=this.frictionEquations.length;for(v=0;v!==w;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),c&&(h.narrowphase=pe.now()-u),c&&(u=pe.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let U=0;U!==C;U++){const L=e[U],P=L.bi,I=L.bj,K=L.si,k=L.sj;let V;if(P.material&&I.material?V=this.getContactMaterial(P.material,I.material)||this.defaultContactMaterial:V=this.defaultContactMaterial,V.friction,P.material&&I.material&&(P.material.friction>=0&&I.material.friction>=0&&P.material.friction*I.material.friction,P.material.restitution>=0&&I.material.restitution>=0&&(L.restitution=P.material.restitution*I.material.restitution)),a.addEquation(L),P.allowSleep&&P.type===ct.DYNAMIC&&P.sleepState===ct.SLEEPING&&I.sleepState===ct.AWAKE&&I.type!==ct.STATIC){const $=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),J=I.sleepSpeedLimit**2;$>=J*2&&(P.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ct.DYNAMIC&&I.sleepState===ct.SLEEPING&&P.sleepState===ct.AWAKE&&P.type!==ct.STATIC){const $=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),J=P.sleepSpeedLimit**2;$>=J*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(P,I,!0),this.collisionMatrixPrevious.get(P,I)||(as.body=I,as.contact=L,P.dispatchEvent(as),as.body=P,I.dispatchEvent(as)),this.bodyOverlapKeeper.set(P.id,I.id),this.shapeOverlapKeeper.set(K.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=pe.now()-u,u=pe.now()),v=0;v!==s;v++){const U=o[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(y=p.length,v=0;v!==y;v++){const U=p[v];U.update();for(let L=0,P=U.equations.length;L!==P;L++){const I=U.equations[L];a.addEquation(I)}}a.solve(t,this),c&&(h.solve=pe.now()-u),a.removeAllEquations();const O=Math.pow;for(v=0;v!==s;v++){const U=o[v];if(U.type&d){const L=O(1-U.linearDamping,t),P=U.velocity;P.scale(L,P);const I=U.angularVelocity;if(I){const K=O(1-U.angularDamping,t);I.scale(K,I)}}}this.dispatchEvent(F_),c&&(u=pe.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,b,D);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=pe.now()-u),this.stepnumber+=1,this.dispatchEvent(U_);let F=!0;if(this.allowSleep)for(F=!1,v=0;v!==s;v++){const U=o[v];U.sleepTick(this.time),U.sleepState!==ct.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Tn,An),t){for(let s=0,o=Tn.length;s<o;s+=2)ls.bodyA=this.getBodyById(Tn[s]),ls.bodyB=this.getBodyById(Tn[s+1]),this.dispatchEvent(ls);ls.bodyA=ls.bodyB=null}if(e){for(let s=0,o=An.length;s<o;s+=2)cs.bodyA=this.getBodyById(An[s]),cs.bodyB=this.getBodyById(An[s+1]),this.dispatchEvent(cs);cs.bodyA=cs.bodyB=null}Tn.length=An.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Tn,An),n){for(let s=0,o=Tn.length;s<o;s+=2){const a=this.getShapeById(Tn[s]),l=this.getShapeById(Tn[s+1]);Cn.shapeA=a,Cn.shapeB=l,a&&(Cn.bodyA=a.body),l&&(Cn.bodyB=l.body),this.dispatchEvent(Cn)}Cn.bodyA=Cn.bodyB=Cn.shapeA=Cn.shapeB=null}if(i){for(let s=0,o=An.length;s<o;s+=2){const a=this.getShapeById(An[s]),l=this.getShapeById(An[s+1]);Rn.shapeA=a,Rn.shapeB=l,a&&(Rn.bodyA=a.body),l&&(Rn.bodyB=l.body),this.dispatchEvent(Rn)}Rn.bodyA=Rn.bodyB=Rn.shapeA=Rn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new qe;const eo=new de,pe=globalThis.performance||{};if(!pe.now){let r=Date.now();pe.timing&&pe.timing.navigationStart&&(r=pe.timing.navigationStart),pe.now=()=>Date.now()-r}new x;const U_={type:"postStep"},F_={type:"preStep"},as={type:ct.COLLIDE_EVENT_NAME,body:null,contact:null},O_=[],B_=[],z_=[],k_=[],Tn=[],An=[],ls={type:"beginContact",bodyA:null,bodyB:null},cs={type:"endContact",bodyA:null,bodyB:null},Cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},St=16,Ln=256,hs=18,Ll=8;class H_{constructor(t,e,n){this.x=t,this.z=e,this.textureManager=n,this.data=new Uint8Array(St*Ln*St),this.mesh=null,this.waterMesh=null,this.isDirty=!0,this.heightMap=new Int16Array(St*St),this.heightMap.fill(-1),this.genVersion=0}generate(t,e,n=0,i=0){this.data.fill(0),this.heightMap.fill(-1),this.genVersion=n;const s=u=>(u|=0,u^=u>>>16,u=Math.imul(u,2146121005),u^=u>>>15,u=Math.imul(u,2221713035),u^=u>>>16,u>>>0),o=(u,p,g,_=0)=>s((i|0)^Math.imul(u|0,374761393)^Math.imul(p|0,668265263)^Math.imul(g|0,2147483647)^(_|0))/4294967296,a=(u,p,g=4,_=2,m=.5)=>{let f=1,v=1,y=0,M=0;for(let A=0;A<g;A++)y+=f*t(u*v,p*v),M+=f,f*=m,v*=_;return M>0?y/M:0},l=new Uint8Array(St*St);for(let u=0;u<St;u++)for(let p=0;p<St;p++){const g=this.x*St+u,_=this.z*St+p,m=a(g/400,_/400,5),f=a(g/140,_/140,5),v=a(g/45,_/45,3),y=a(g/300,_/300,4)+.15,M=Math.abs(t(g/150,_/150)),A=M<.06?(.06-M)*90:0,w=1-Math.abs(t(g/100,_/100)),C=Math.max(0,m*.5+.5-.2);let O=20+(m*.5+.5)*20+(f*.5+.5)*15+(v*.5+.5)*5+C*w*50-A;O=Math.min(Ln-32,Math.max(6,Math.floor(O)));let S="plains";O<=hs+2?(S="shore",l[p*St+u]=4):O>hs+45?(S="mountain",l[p*St+u]=3):y<-.4?(S="desert",l[p*St+u]=2):y>.2?(S="forest",l[p*St+u]=1):(S="plains",l[p*St+u]=0);const b=p*St+u;this.heightMap[b]=Math.max(0,O-1);for(let D=0;D<Ln;D++){let F=0,U=!1;D<O-5&&e(g/30,D/25,_/30)>.6&&(U=!0),U?D<=Ll?o(g,D,_,101)<.12&&(F=15):D<hs&&(F=6):D<3?F=9:D<O-4?(F=3,D>=5&&D<=70&&e(g/15,D/15,_/15)>.7&&(F=40),D>=5&&D<=50&&e(g/18,D/18,_/18)>.75&&(F=41),D>=5&&D<=16&&e(g/25,D/25,_/25)>.82&&(F=43)):D<O-1?F=S==="desert"||S==="shore"?5:1:D===O-1&&(S==="desert"||S==="shore"?F=5:S==="mountain"?F=3:F=2),F===0&&D<=hs&&D>=O&&(F=6),F===0&&D<=Ll&&o(g,D,_,102)<.02&&(F=15),F!==0&&this.setBlock(u,D,p,F,{skipHeightUpdate:!0})}}this.rebuildHeightMap();const c=(u,p)=>{const g=this.getSurfaceHeight(u,p);return g===null?!1:this.getBlock(u,g,p)===2&&g>hs+2},h=(u,p)=>this.getSurfaceHeight(u,p);for(let u=2;u<St-2;u++)for(let p=2;p<St-2;p++){if(!c(u,p))continue;const g=h(u,p);let _=!0;for(let M=-1;M<=1&&_;M++)for(let A=-1;A<=1;A++){if(!c(u+M,p+A)){_=!1;break}const w=h(u+M,p+A);if(w===null||Math.abs(w-g)>2){_=!1;break}}if(!_)continue;const m=l[p*St+u];let f=0;if(m===1)f=.08;else if(m===0)f=.005;else if(m===3)f=.01;else continue;const v=this.x*St+u,y=this.z*St+p;o(v,g|0,y,201)>f||this.generateTree(u,g+1,p,i)}let d=0;for(let u=0;u<l.length;u++)if(l[u]===1){d=0;break}for(let u=0;u<40&&d<2;u++){const p=o(this.x,u,this.z,301),g=o(this.z,u,this.x,302),_=2+Math.floor(p*(St-4)),m=2+Math.floor(g*(St-4));if(l[m*St+_]!==1||!c(_,m))continue;const v=h(_,m);if(v===null)continue;const y=h(_+1,m),M=h(_,m+1);y===null||M===null||Math.abs(y-v)>2||Math.abs(M-v)>2||(this.generateTree(_,v+1,m,i),d++)}this.isDirty=!0}generateTree(t,e,n,i=0){const a=4+(l=>(l|=0,l^=l>>>16,l=Math.imul(l,2146121005),l^=l>>>15,l=Math.imul(l,2221713035),l^=l>>>16,l>>>0))((i|0)^Math.imul(this.x*16+t|0,374761393)^Math.imul(this.z*16+n|0,668265263))%3;for(let l=0;l<a;l++)this.setBlock(t,e+l,n,4);for(let l=t-2;l<=t+2;l++)for(let c=n-2;c<=n+2;c++)for(let h=e+a-2;h<=e+a+1;h++)(Math.abs(l-t)+Math.abs(c-n)<=2||h>e+a-1&&Math.abs(l-t)<=1&&Math.abs(c-n)<=1)&&this.getBlock(l,h,c)===0&&this.setBlock(l,h,c,7)}getBlock(t,e,n){if(t<0||t>=St||e<0||e>=Ln||n<0||n>=St)return 0;const i=e*St*St+n*St+t;return this.data[i]}setBlock(t,e,n,i,s={}){if(t<0||t>=St||e<0||e>=Ln||n<0||n>=St)return;const o=e*St*St+n*St+t;this.data[o]=i,s.skipHeightUpdate||this.updateColumnHeight(t,n),this.isDirty=!0}updateColumnHeight(t,e){if(t<0||t>=St||e<0||e>=St)return;const n=e*St+t;for(let i=Ln-1;i>=0;i--){const s=this.getBlock(t,i,e);if(s!==0&&s!==6&&s!==7){this.heightMap[n]=i;return}}this.heightMap[n]=-1}getSurfaceHeight(t,e){if(t<0||t>=St||e<0||e>=St)return null;const n=e*St+t,i=this.heightMap[n];if(i>=0)return i;for(let s=Ln-1;s>=0;s--){const o=this.getBlock(t,s,e);if(o!==0&&o!==6&&o!==7)return s}return null}rebuildHeightMap(){for(let t=0;t<St;t++)for(let e=0;e<St;e++)this.updateColumnHeight(t,e)}getBlockWithWorld(t,e,n,i){if(n<0||n>=Ln)return 0;if(e>=0&&e<St&&i>=0&&i<St)return this.getBlock(e,n,i);if(!t)return 0;const s=this.x*St+e,o=this.z*St+i;return t.getBlock(s,n,o)}buildMesh(t){if(!this.isDirty)return;const e=[],n=[],i=[],s=[];for(let a=0;a<Ln;a++)for(let l=0;l<St;l++)for(let c=0;c<St;c++){const h=this.getBlock(c,a,l);h!==0&&(this.shouldRenderFace(t,c+1,a,l,h)&&this.addFace(e,n,i,s,c,a,l,"right",h),this.shouldRenderFace(t,c-1,a,l,h)&&this.addFace(e,n,i,s,c,a,l,"left",h),this.shouldRenderFace(t,c,a+1,l,h)&&this.addFace(e,n,i,s,c,a,l,"top",h),this.shouldRenderFace(t,c,a-1,l,h)&&this.addFace(e,n,i,s,c,a,l,"bottom",h),this.shouldRenderFace(t,c,a,l+1,h)&&this.addFace(e,n,i,s,c,a,l,"front",h),this.shouldRenderFace(t,c,a,l-1,h)&&this.addFace(e,n,i,s,c,a,l,"back",h))}const o=new Fn;return o.setAttribute("position",new Xe(e,3)),o.setAttribute("normal",new Xe(n,3)),o.setAttribute("uv",new Xe(i,2)),o.setIndex(s),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=o):(this.mesh=new Pt(o,this.textureManager.material),this.mesh.position.set(this.x*St,0,this.z*St),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),this.isDirty=!1,this.mesh}shouldRenderFace(t,e,n,i,s){const o=this.getBlockWithWorld(t,e,n,i);return s===6&&o===6||s===15&&o===15||s===7&&o===7?!1:o===0||s!==6&&o===6||s!==15&&o===15||s!==7&&o===7}addFace(t,e,n,i,s,o,a,l,c){let h=[],d=[];const u=this.textureManager.getUVs(c,l),p=t.length/3;switch(l){case"right":h=[1,0,1,1,0,0,1,1,1,1,1,0],d=[1,0,0];break;case"left":h=[0,0,0,0,0,1,0,1,0,0,1,1],d=[-1,0,0];break;case"top":h=[0,1,1,1,1,1,0,1,0,1,1,0],d=[0,1,0];break;case"bottom":h=[0,0,0,1,0,0,0,0,1,1,0,1],d=[0,-1,0];break;case"front":h=[0,0,1,1,0,1,0,1,1,1,1,1],d=[0,0,1];break;case"back":h=[1,0,0,0,0,0,1,1,0,0,1,0],d=[0,0,-1];break}for(let g=0;g<h.length;g+=3)t.push(h[g]+s,h[g+1]+o,h[g+2]+a);for(let g=0;g<4;g++)e.push(...d);n.push(u[2].u,u[2].v),n.push(u[3].u,u[3].v),n.push(u[0].u,u[0].v),n.push(u[1].u,u[1].v),i.push(p,p+1,p+2),i.push(p+2,p+1,p+3)}}const Pl=[{name:"Mountain Goat",color:15984117,size:.8,speed:1.4,heightOffset:.7,drop:{type:12,count:2}},{name:"Wild Boar",color:7951688,size:.9,speed:1,heightOffset:.6,drop:{type:11,count:2}},{name:"Peppy Chick",color:16763432,size:.5,speed:1.8,heightOffset:.5,drop:{type:13,count:3}}];class G_{constructor(t,e,n){this.profile=t,this.mesh=this.createMesh(),this.mesh.position.copy(e),this.spawnCenter=new z(e.x,e.y,e.z),this.direction=new z,this.moveTimer=0,this.heightOffset=t.heightOffset??.6,this.physicsWorld=n||null,this.body=null,this.physicsWorld&&(this.body=this.createPhysicsBody(e),this.physicsWorld.addBody(this.body)),this.chooseDirection()}createMesh(){const t=new We,e=new Zs({color:this.profile.color,roughness:.85,metalness:.05}),n=new Zs({color:new xt(this.profile.color).multiplyScalar(.55),roughness:.9,metalness:.02}),i=new Zs({color:1118481,roughness:.95,metalness:0}),s=this.profile.size,o=new jt(s*1.15,s*.6,s*.75),a=new jt(s*.55,s*.45,s*.55),l=new jt(s*.18,s*.4,s*.18),c=new Pt(o,e);c.position.set(0,s*.38,0),c.castShadow=!0,c.receiveShadow=!0;const h=new Pt(a,e);h.position.set(0,s*.48,s*.62),h.castShadow=!0,h.receiveShadow=!0;const d=[],u=[[-s*.38,s*.12,-s*.25],[s*.38,s*.12,-s*.25],[-s*.38,s*.12,s*.25],[s*.38,s*.12,s*.25]];for(const[p,g,_]of u){const m=new Pt(l,n);m.position.set(p,g,_),m.castShadow=!0,m.receiveShadow=!0,d.push(m)}if(t.add(c,h,...d),this.profile.name.includes("Goat")){const p=new jt(s*.12,s*.28,s*.12),g=new Pt(p,i),_=new Pt(p,i);g.position.set(-s*.16,s*.72,s*.72),_.position.set(s*.16,s*.72,s*.72),t.add(g,_)}else if(this.profile.name.includes("Boar")){const p=new jt(s*.35,s*.25,s*.25),g=new Pt(p,n);g.position.set(0,s*.42,s*.92);const _=new jt(s*.08,s*.12,s*.08),m=new Pt(_,i),f=new Pt(_,i);m.position.set(-s*.16,s*.32,s*.96),f.position.set(s*.16,s*.32,s*.96),t.add(g,m,f)}else if(this.profile.name.includes("Chick")){c.scale.set(.9,.85,.9),h.scale.set(.85,.85,.85),h.position.set(0,s*.52,s*.58);const p=new jt(s*.18,s*.12,s*.18),g=new Zs({color:16757504,roughness:.7,metalness:0}),_=new Pt(p,g);_.position.set(0,s*.5,s*.85);const m=new jt(s*.1,s*.28,s*.35),f=new Pt(m,e),v=new Pt(m,e);f.position.set(-s*.62,s*.42,s*.05),v.position.set(s*.62,s*.42,s*.05),t.add(_,f,v)}t.userData=t.userData||{},t.userData.animal=this;for(const p of t.children)p.userData=p.userData||{},p.userData.animal=this;return t.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t}createPhysicsBody(t){const e=Math.max(.2,this.profile.size*.35),n=new ct({mass:0,type:ct.KINEMATIC,position:new x(t.x,t.y,t.z),shape:new mo(e)});return n.fixedRotation=!0,n}chooseDirection(){const t=Math.random()-.5,e=Math.random()-.5;this.direction.set(t,0,e),this.direction.lengthSq()<.01&&this.direction.set(1,0,0),this.direction.normalize(),this.moveTimer=.8+Math.random()*1.8}update(t,e){this.moveTimer-=t,this.moveTimer<=0&&this.chooseDirection();const n=this.direction.clone().multiplyScalar(this.profile.speed*t);if(this.mesh.position.add(n),this.direction.lengthSq()>1e-4){const l=Math.atan2(this.direction.x,this.direction.z);this.mesh.rotation.y=l}const i=this.mesh.position.x-this.spawnCenter.x,s=this.mesh.position.z-this.spawnCenter.z;if(Math.sqrt(i*i+s*s)>12){const l=new z(-i,0,-s).normalize();this.mesh.position.addScaledVector(l,this.profile.speed*t*1.2),this.direction.copy(l)}const a=e.getSurfaceY(Math.floor(this.mesh.position.x),Math.floor(this.mesh.position.z));a!==null&&(this.mesh.position.y=a+1+this.heightOffset),this.body&&(this.body.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z),this.body.aabbNeedsUpdate=!0)}}class V_{constructor(t,e,n){this.scene=t,this.world=e,this.physicsWorld=n||null,this.animals=[],this.spawnTimer=0,this.maxAnimals=8}update(t,e){if(t){this.spawnTimer+=t,e&&this.spawnTimer>.9&&(this.spawnTimer=0,this.trySpawnNear(e));for(const n of this.animals)n.update(t,this.world)}}trySpawnNear(t){if(!(this.animals.length>=this.maxAnimals))for(let e=0;e<3;e++){const n=Math.floor(t.x+(Math.random()*32-16)),i=Math.floor(t.z+(Math.random()*32-16)),s=this.world.getSurfaceY(n,i);if(s===null)continue;const o=this.world.getBlock(n,s,i);if(o!==2&&o!==1||Math.random()>.35)continue;const a=Pl[Math.floor(Math.random()*Pl.length)];this.spawnAnimal(a,new z(n+.5,s+1,i+.5));break}}spawnAnimal(t,e){const n=new G_(t,e,this.physicsWorld);this.scene.add(n.mesh),this.animals.push(n)}raycast(t){var s;if(this.animals.length===0)return null;const e=this.animals.map(o=>o.mesh),n=t.intersectObjects(e,!0);if(n.length===0)return null;let i=n[0].object;for(;i;){if((s=i.userData)!=null&&s.animal)return i.userData.animal;i=i.parent}return null}remove(t){const e=this.animals.indexOf(t);e!==-1&&(this.scene.remove(t.mesh),t.body&&this.physicsWorld&&this.physicsWorld.removeBody(t.body),this.animals.splice(e,1))}}class W_{constructor(t,e,n=null){this.scene=t,this.textureManager=e,this.chunks=new Map,this.renderDistance=4,this.chunkSize=16,this.noise2D=null,this.noise3D=null,this.physicsWorld=n,this.animalManager=new V_(t,this,n),this.seed=0,this.edits=new Map,this.generationVersion=8}getChunkKey(t,e){return`${t},${e}`}rebuildChunkMesh(t){if(!t)return;const e=t.buildMesh(this);e&&!e.parent&&this.scene.add(e)}clearAllChunks(){for(const[,t]of this.chunks)t.mesh&&(t.mesh.geometry.dispose(),this.scene.remove(t.mesh));this.chunks.clear()}setEditsFromSave(t){if(this.edits.clear(),!(!t||typeof t!="object"))for(const[e,n]of Object.entries(t))Array.isArray(n)&&this.edits.set(e,n)}exportEditsForSave(){const t={};for(const[e,n]of this.edits.entries())t[e]=n;return t}recordEdit(t,e,n,i,s,o){const a=this.getChunkKey(t,e);let l=this.edits.get(a);l||(l=[],this.edits.set(a,l));for(let c=0;c<l.length;c++){const h=l[c];if(h&&h[0]===n&&h[1]===i&&h[2]===s){h[3]=o;return}}l.push([n,i,s,o])}applyEditsToChunk(t){if(!t)return;const e=this.getChunkKey(t.x,t.z),n=this.edits.get(e);if(!(!n||n.length===0)){for(const i of n){if(!i||i.length<4)continue;const[s,o,a,l]=i;t.setBlock(s,o,a,l,{skipHeightUpdate:!0})}t.rebuildHeightMap(),t.isDirty=!0}}markNeighborsDirty(t,e){const n=[[t-1,e],[t+1,e],[t,e-1],[t,e+1]];for(const[i,s]of n){const o=this.chunks.get(this.getChunkKey(i,s));o&&(o.isDirty=!0)}}update(t,e,n=0){if(!this.noise2D||!this.noise3D)return;const i=Math.floor(t/this.chunkSize),s=Math.floor(e/this.chunkSize);for(let o=-this.renderDistance;o<=this.renderDistance;o++)for(let a=-this.renderDistance;a<=this.renderDistance;a++){const l=i+o,c=s+a,h=this.getChunkKey(l,c);if(!this.chunks.has(h)){const u=new H_(l,c,this.textureManager);u.generate(this.noise2D,this.noise3D,this.generationVersion,this.seed),this.applyEditsToChunk(u),this.rebuildChunkMesh(u),this.chunks.set(h,u),this.markNeighborsDirty(l,c),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(l-1,c))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(l+1,c))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(l,c-1))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(l,c+1)))}const d=this.chunks.get(h);d&&d.genVersion!==this.generationVersion&&(d.generate(this.noise2D,this.noise3D,this.generationVersion,this.seed),this.applyEditsToChunk(d),this.rebuildChunkMesh(d),this.markNeighborsDirty(d.x,d.z),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(d.x-1,d.z))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(d.x+1,d.z))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(d.x,d.z-1))),this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(d.x,d.z+1))))}for(const[o,a]of this.chunks)Math.sqrt(Math.pow(a.x-i,2)+Math.pow(a.z-s,2))>this.renderDistance+2&&(a.mesh&&(a.mesh.geometry.dispose(),this.scene.remove(a.mesh)),this.chunks.delete(o));this.animalManager&&this.animalManager.update(n,{x:t,z:e})}getBlock(t,e,n){const i=Math.floor(t/this.chunkSize),s=Math.floor(n/this.chunkSize),o=`${i},${s}`,a=this.chunks.get(o);if(!a)return 0;const l=(t%this.chunkSize+this.chunkSize)%this.chunkSize,c=(n%this.chunkSize+this.chunkSize)%this.chunkSize;return a.getBlock(l,e,c)}setBlock(t,e,n,i,s={}){const{record:o=!0}=s,a=Math.floor(t/this.chunkSize),l=Math.floor(n/this.chunkSize),c=this.getChunkKey(a,l),h=this.chunks.get(c);if(!h)return;const d=(t%this.chunkSize+this.chunkSize)%this.chunkSize,u=(n%this.chunkSize+this.chunkSize)%this.chunkSize;h.setBlock(d,e,u,i),o&&this.recordEdit(a,l,d,e,u,i),this.rebuildChunkMesh(h);const p=d===0,g=d===this.chunkSize-1,_=u===0,m=u===this.chunkSize-1;p&&this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(a-1,l))),g&&this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(a+1,l))),_&&this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(a,l-1))),m&&this.rebuildChunkMesh(this.chunks.get(this.getChunkKey(a,l+1)))}getSurfaceY(t,e){const n=Math.floor(t/this.chunkSize),i=Math.floor(e/this.chunkSize),s=`${n},${i}`,o=this.chunks.get(s);if(!o)return null;const a=(t%this.chunkSize+this.chunkSize)%this.chunkSize,l=(e%this.chunkSize+this.chunkSize)%this.chunkSize;return o.getSurfaceHeight(a,l)}raycastAnimal(t){return this.animalManager?this.animalManager.raycast(t):null}removeAnimal(t){!this.animalManager||!t||this.animalManager.remove(t)}}class X_{constructor(t,e,n,i,s,o,a,l=null,c=null,h=null){this.scene=t,this.camera=e,this.physicsWorld=n,this.input=i,this.world=s,this.inventory=o,this.handManager=a,this.monsterManager=l,this.placeableObjects=c,this.dayNightManager=h;const d=.35,u=.5;this.playerMaterial=new Zn("player"),this.blockMaterial=new Zn("block"),this.body=new ct({mass:70,position:new x(0,80,0),fixedRotation:!0,material:this.playerMaterial}),this.body.addShape(new $n(new x(d,u,d))),this.body.addShape(new mo(d),new x(0,u,0)),this.body.addShape(new mo(d),new x(0,-u,0)),this.body.linearDamping=.99,this.physicsWorld.addContactMaterial(new Qi(this.playerMaterial,this.blockMaterial,{friction:0,restitution:0})),this.physicsWorld.addBody(this.body),this.pitch=0,this.yaw=0,this.raycaster=new mg,this.raycaster.far=6,this.miningProgress=0,this.miningTarget=null,this.isMining=!1,this.isLeftMouseDown=!1,this.isRightMouseDown=!1,this.maxHealth=20,this.health=20,this.maxHunger=20,this.hunger=20,this.hungerTimer=0,this.regenTimer=0,this.damageFlashTimer=0,document.addEventListener("mousemove",p=>this.onMouseMove(p)),document.addEventListener("mousedown",p=>this.onMouseDown(p)),document.addEventListener("mouseup",p=>this.onMouseUp(p))}takeDamage(t){this.health=Math.max(0,this.health-t),this.damageFlashTimer=.3,this.updateHealthUI&&this.updateHealthUI(),this.health<=0&&this.onDeath()}heal(t){this.health=Math.min(this.maxHealth,this.health+t),this.updateHealthUI&&this.updateHealthUI()}eat(t,e=0){this.hunger=Math.min(this.maxHunger,this.hunger+t),e>0&&this.heal(e),this.updateHealthUI&&this.updateHealthUI()}onDeath(){console.log("Гравець помер!"),this.health=this.maxHealth,this.hunger=this.maxHunger,this.body.position.set(0,80,0),this.body.velocity.set(0,0,0),this.updateHealthUI&&this.updateHealthUI()}getFoodValue(t){return{11:{hunger:3,heal:0,name:"Сире м'ясо"},16:{hunger:8,heal:4,name:"Смажене м'ясо"},17:{hunger:5,heal:2,name:"Хліб"}}[t]||null}showMessage(t){let e=document.getElementById("player-message");e||(e=document.createElement("div"),e.id="player-message",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -100px)",e.style.background="rgba(0, 0, 0, 0.8)",e.style.color="white",e.style.padding="12px 24px",e.style.borderRadius="8px",e.style.fontSize="16px",e.style.fontWeight="bold",e.style.pointerEvents="none",e.style.zIndex="1001",e.style.display="none",document.body.appendChild(e)),e.textContent=t,e.style.display="block",setTimeout(()=>{e.style.display="none"},2e3)}onMouseMove(t){if(!this.input.isLocked)return;const e=.002;this.yaw-=t.movementX*e,this.pitch-=t.movementY*e,this.pitch=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.pitch));const n=new $i;n.setFromEuler(new Wi(this.pitch,this.yaw,0,"YXZ")),this.camera.quaternion.copy(n)}getBlockHardness(t){const e={0:0,1:.5,2:.6,3:1.5,4:2,5:.5,6:0,7:.2,8:2,9:-1,40:3,41:3,44:2};return e[t]!==void 0?e[t]:1}getBlockToolType(t){const e={1:"shovel",2:"shovel",3:"pickaxe",4:"axe",5:"shovel",99:"any",8:"axe",40:"pickaxe",41:"pickaxe",44:"pickaxe"};return t===7?"any":e[t]||"any"}getBlockMinTier(t){return{3:"wood",40:"wood",41:"stone",43:"iron",44:"wood"}[t]||null}canHarvestBlock(t,e){const n=this.getBlockMinTier(t);if(!n)return!0;if(!e)return!1;const i=["wood","stone","iron","diamond"],s=i.indexOf(e.tier.name||e.tier),o=i.indexOf(n);return s>=o}calculateMiningTime(t,e){const n=this.getBlockHardness(t);if(n<=0)return 0;if(n<0)return 1/0;const i=this.getBlockToolType(t);let s=1;if(e)if(i==="any"||e.type===i){const a={wood:2,stone:4,iron:6,diamond:8},l=e.tier.name||e.tier;s=a[l]||1}else s=1;return n*1.5/s}onMouseDown(t){var e,n,i,s;if(this.input.isLocked){if(t.button===0){if(this.isLeftMouseDown=!0,this.raycaster.setFromCamera(new Xt(0,0),this.camera),this.placeableObjects){const a=this.placeableObjects.raycastObject(this.raycaster);if(a){this.handManager&&this.handManager.startSwing(),this.placeableObjects.removeObject(a.position.x,a.position.y,a.position.z),this.inventory.add(a.type,1);return}}if(this.monsterManager){const a=this.monsterManager.raycastMonster(this.raycaster);if(a){this.handManager&&this.handManager.startSwing();const l=this.inventory.getSelectedItem();let c=1;if(l){const h=this.inventory.uiManager.getToolInfo(l.type);if(h)if(h.type==="sword"){const d={wood:5,stone:6,iron:7,diamond:8},u=((e=h.tier)==null?void 0:e.name)||h.tier||"wood";c=d[u]||5}else if(h.type==="axe"){const d={wood:4,stone:5,iron:6,diamond:7},u=((n=h.tier)==null?void 0:n.name)||h.tier||"wood";c=d[u]||4}else c=2}this.monsterManager.damageMonster(a,c),a.health<=0&&((i=a.profile)!=null&&i.drop)&&this.inventory.add(a.profile.drop.type,a.profile.drop.count);return}}const o=this.world.raycastAnimal(this.raycaster);o&&(this.handManager&&this.handManager.startSwing(),this.world.removeAnimal(o),(s=o.profile)!=null&&s.drop&&this.inventory.add(o.profile.drop.type,o.profile.drop.count))}else if(t.button===2){if(this.isRightMouseDown=!0,this.raycaster.setFromCamera(new Xt(0,0),this.camera),this.placeableObjects){const l=this.placeableObjects.raycastObject(this.raycaster);if(l){if(l.type===72){this.placeableObjects.toggleDoor(l.position.x,l.position.y,l.position.z);return}else if(l.type===70){this.dayNightManager&&this.dayNightManager.isNight()?(this.placeableObjects.sleep(this.dayNightManager),this.showMessage("Ви прокинулись!")):this.showMessage("Можна спати тільки вночі");return}else if(l.type===71){this.openChest&&this.openChest(l);return}}}const o=this.inventory.getSelectedItem();if(o){const l=this.getFoodValue(o.type);if(l){this.hunger<this.maxHunger&&(this.eat(l.hunger,l.heal),this.inventory.remove(o.type,1),this.handManager&&this.handManager.startSwing());return}}const a=this.raycastBlockVoxel(this.raycaster.far);if(a){const l=a.x+a.normal.x,c=a.y+a.normal.y,h=a.z+a.normal.z,d=this.inventory.getSelectedBlock();if(d>=70&&d<=72){if(this.placeableObjects){if(this.world.getBlock(l,c,h)!==0||this.placeableObjects.isPositionOccupied(l,c,h)||d===72&&(this.world.getBlock(l,c+1,h)!==0||this.placeableObjects.isPositionOccupied(l,c+1,h)))return;const u=Math.round(this.yaw/(Math.PI/2))*(Math.PI/2);this.inventory.remove(d,1)&&(this.placeableObjects.placeObject(d,l,c,h,u)?this.handManager&&this.handManager.startSwing():this.inventory.add(d,1))}}else if(d>=1&&d<=15||d>=40&&d<=44){if(this.world.getBlock(l,c,h)!==0)return;this.inventory.remove(d,1)&&(this.world.setBlock(l,c,h,d),this.handManager&&this.handManager.startSwing())}}}}}onMouseUp(t){t.button===0&&(this.isLeftMouseDown=!1,this.isMining=!1,this.miningProgress=0,this.miningTarget=null,this.updateMiningIndicator(0)),t.button===2&&(this.isRightMouseDown=!1)}update(t){if(this.handManager){const l=this.inventory.getSelectedItem();this.handManager.update(t,l)}if(this.isLeftMouseDown){this.handManager&&!this.handManager.isSwinging&&this.handManager.startSwing();const l=this.raycastBlockVoxel(this.raycaster.far);if(l){const c=l.x,h=l.y,d=l.z,u=this.world.getBlock(c,h,d);if(u!==0&&u!==9){(!this.miningTarget||this.miningTarget.x!==c||this.miningTarget.y!==h||this.miningTarget.z!==d)&&(this.miningTarget={x:c,y:h,z:d,blockType:u},this.miningProgress=0,this.isMining=!0);const p=this.inventory.getSelectedItem(),g=p?this.inventory.uiManager.getToolInfo(p.type):null,_=this.calculateMiningTime(u,g);if(_===1/0)this.miningProgress=0;else if(this.miningProgress+=t,this.updateMiningIndicator(this.miningProgress/_),this.miningProgress>=_){if(this.canHarvestBlock(u,g)){let f=u,v=1;u===2&&(f=1),u===3&&(f=44),u===7&&Math.random()>.3&&(v=0),u===40&&(f=40),u===41&&(f=41),u===43&&(f=43),v>0&&this.inventory.add(f,v)}this.world.setBlock(c,h,d,0),g&&this.inventory.damageTool(1),this.miningProgress=0,this.miningTarget=null,this.isMining=!1,this.updateMiningIndicator(0)}}else this.isMining=!1,this.miningProgress=0,this.updateMiningIndicator(0)}else this.isMining=!1,this.miningProgress=0,this.updateMiningIndicator(0)}else this.isMining&&(this.isMining=!1,this.miningProgress=0,this.updateMiningIndicator(0));this.input.isKeyDown("Space")&&Math.abs(this.body.velocity.y)<.1&&(this.body.velocity.y=12);const e=new z((this.input.isKeyDown("KeyD")?1:0)-(this.input.isKeyDown("KeyA")?1:0),0,(this.input.isKeyDown("KeyS")?1:0)-(this.input.isKeyDown("KeyW")?1:0)),n=this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("ShiftRight"),i=10,s=n?i*1.6:i,o=new z;if(e.lengthSq()>0){const l=e.clone().normalize().applyEuler(new Wi(0,this.yaw,0));o.copy(l).multiplyScalar(s)}this.body.velocity.x=Vn.lerp(this.body.velocity.x,o.x,.3),this.body.velocity.z=Vn.lerp(this.body.velocity.z,o.z,.3);const a=new z().copy(this.body.position).add(new z(0,.9,0));this.camera.position.lerp(a,.4),this.hungerTimer+=t,this.hungerTimer>=10&&(this.hunger=Math.max(0,this.hunger-.5),this.hungerTimer=0,this.updateHealthUI&&this.updateHealthUI(),this.hunger<=0&&this.takeDamage(1)),this.hunger>=18&&this.health<this.maxHealth&&(this.regenTimer+=t,this.regenTimer>=4&&(this.heal(1),this.hunger=Math.max(0,this.hunger-1),this.regenTimer=0)),this.damageFlashTimer>0&&(this.damageFlashTimer-=t,this.updateDamageFlash()),this.updateFoodIndicator(),this.updatePhysicsColliders()}updateFoodIndicator(){let t=document.getElementById("food-indicator");const e=this.inventory.getSelectedItem(),n=e?this.getFoodValue(e.type):null;n&&this.hunger<this.maxHunger?(t||(t=document.createElement("div"),t.id="food-indicator",t.style.position="fixed",t.style.bottom="80px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.background="rgba(0, 0, 0, 0.7)",t.style.color="white",t.style.padding="8px 16px",t.style.borderRadius="5px",t.style.fontSize="14px",t.style.pointerEvents="none",t.style.zIndex="1000",document.body.appendChild(t)),t.style.display="block",t.textContent=`🍖 ПКМ для їжі: +${n.hunger} голоду${n.heal>0?`, +${n.heal} HP`:""}`):t&&(t.style.display="none")}updateDamageFlash(){const t=document.getElementById("damage-overlay");if(!t){const n=document.createElement("div");n.id="damage-overlay",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.backgroundColor="rgba(255, 0, 0, 0)",n.style.pointerEvents="none",n.style.zIndex="999",document.body.appendChild(n);return}const e=Math.max(0,this.damageFlashTimer/.3)*.4;t.style.backgroundColor=`rgba(255, 0, 0, ${e})`}raycastBlockVoxel(t=6){this.raycaster.setFromCamera(new Xt(0,0),this.camera);const e=this.raycaster.ray.origin,n=this.raycaster.ray.direction;let i=Math.floor(e.x),s=Math.floor(e.y),o=Math.floor(e.z);const a=n.x>0?1:n.x<0?-1:0,l=n.y>0?1:n.y<0?-1:0,c=n.z>0?1:n.z<0?-1:0,h=(M,A)=>{if(A===0)return 1/0;const w=Math.floor(M)===M;return A>0?((w?0:1)+Math.floor(M)-M)/A+1e-9:(M-Math.floor(M))/-A+1e-9};let d=h(e.x,n.x),u=h(e.y,n.y),p=h(e.z,n.z);const g=a===0?1/0:Math.abs(1/n.x),_=l===0?1/0:Math.abs(1/n.y),m=c===0?1/0:Math.abs(1/n.z),f=this.world.getBlock(i,s,o);if(f!==0&&f!==6&&f!==15)return{x:i,y:s,z:o,normal:{x:0,y:0,z:0}};let v=0,y=null;for(;v<=t;){d<u?d<p?(i+=a,v=d,d+=g,y="x"):(o+=c,v=p,p+=m,y="z"):u<p?(s+=l,v=u,u+=_,y="y"):(o+=c,v=p,p+=m,y="z");const M=this.world.getBlock(i,s,o);if(M!==0&&M!==6&&M!==15){const A={x:0,y:0,z:0};return y==="x"&&(A.x=-a),y==="y"&&(A.y=-l),y==="z"&&(A.z=-c),{x:i,y:s,z:o,normal:A}}}return null}updateMiningIndicator(t){let e=document.getElementById("mining-progress");if(!e){e=document.createElement("div"),e.id="mining-progress",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, 60px)",e.style.width="200px",e.style.height="20px",e.style.backgroundColor="rgba(0, 0, 0, 0.5)",e.style.border="2px solid #fff",e.style.display="none",e.style.zIndex="1000";const i=document.createElement("div");i.id="mining-progress-fill",i.style.height="100%",i.style.backgroundColor="#4caf50",i.style.width="0%",i.style.transition="width 0.1s",e.appendChild(i),document.body.appendChild(e)}const n=document.getElementById("mining-progress-fill");t>0?(e.style.display="block",n.style.width=`${Math.min(t*100,100)}%`):(e.style.display="none",n.style.width="0%")}updatePhysicsColliders(){const e=Math.floor(this.body.position.x),n=Math.floor(this.body.position.y),i=Math.floor(this.body.position.z);this.colliderMap||(this.colliderMap=new Map);const s=new Set;for(let o=e-2;o<=e+2;o++)for(let a=n-2;a<=n+2;a++)for(let l=i-2;l<=i+2;l++){const c=this.world.getBlock(o,a,l);if(c!==0&&c!==6&&c!==7&&c!==15){const h=`${o},${a},${l}`;if(s.add(h),!this.colliderMap.has(h)){const d=new ct({mass:0,position:new x(o+.5,a+.5,l+.5),shape:new $n(new x(.5,.5,.5)),material:this.blockMaterial});this.physicsWorld.addBody(d),this.colliderMap.set(h,d)}}}for(const[o,a]of this.colliderMap)s.has(o)||(this.physicsWorld.removeBody(a),this.colliderMap.delete(o))}}class q_{constructor(){this.keys={},this.isLocked=!1,this.allowPointerLock=!0,document.addEventListener("keydown",t=>this.onKeyDown(t)),document.addEventListener("keyup",t=>this.onKeyUp(t)),document.addEventListener("pointerlockchange",()=>this.onPointerLockChange()),document.addEventListener("click",t=>this.requestLock(t))}onKeyDown(t){this.keys[t.code]=!0}onKeyUp(t){this.keys[t.code]=!1}isKeyDown(t){return!!this.keys[t]}onPointerLockChange(){this.isLocked=document.pointerLockElement===document.body}requestLock(t){if(!this.allowPointerLock||this.isLocked)return;const e=t==null?void 0:t.target;e&&e.closest&&e.closest("#inventory-screen, #hotbar")||!this.isLocked&&this.allowPointerLock&&document.body.requestPointerLock()}setPointerLockEnabled(t){this.allowPointerLock=t,!t&&document.pointerLockElement===document.body&&document.exitPointerLock()}}class Y_{constructor(){this.loader=new hg,this.material=null,this.transparentMaterial=null}load(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#ff00ff",e.fillRect(0,0,128,128);const n=(o,a,l,c=.1,h="noise")=>{const d=o*16,u=a*16;e.fillStyle=l,e.fillRect(d,u,16,16);const p=e.getImageData(d,u,16,16),g=p.data;for(let _=0;_<g.length;_+=4){const m=_/4%16,f=Math.floor(_/4/16);let v=0;if(h==="noise")v=(Math.random()-.5)*255*c;else if(h==="bricks"){const y=Math.floor(f/4),M=m+y%2*4;v=f%4===0||M%8===0?-40:10}else if(h==="log")v=(Math.random()-.5)*30+(m%4===0?-20:0);else if(h==="rings"){const y=m-7.5,M=f-7.5,A=Math.sqrt(y*y+M*M);v=Math.sin(A*1.5)>0?-20:10}else h==="leaves"&&(v=Math.random()>.6?-30:10);g[_]=Math.min(255,Math.max(0,g[_]+v)),g[_+1]=Math.min(255,Math.max(0,g[_+1]+v)),g[_+2]=Math.min(255,Math.max(0,g[_+2]+v))}e.putImageData(p,d,u)},i=(o,a,l,c)=>{n(o,a,l,.15);const h=o*16,d=a*16;e.fillStyle=c;const u=[[4,4],[5,4],[4,5],[10,10],[11,10],[10,11],[11,11],[12,3],[13,3],[3,12]];for(const[p,g]of u)e.fillRect(h+p,d+g,1,1)};n(0,0,"#795548",.2),n(1,0,"#795548",.2),e.fillStyle="#4caf50",e.fillRect(16,0,16,4),e.fillRect(18,4,1,2),e.fillRect(21,4,2,3),e.fillRect(25,4,1,1),e.fillRect(29,4,2,4),n(2,0,"#4caf50",.15),n(3,0,"#9e9e9e",.15),n(0,1,"#5d4037",.1,"log"),n(1,1,"#5d4037",.1,"rings"),n(2,1,"#388e3c",.1,"leaves"),n(3,1,"#fff59d",.15),n(0,2,"#42a5f5",.05),n(1,2,"#a1887f",.1),e.fillStyle="#6d4c41",e.fillRect(16,32,16,1),e.fillRect(16,36,16,1),e.fillRect(16,40,16,1),e.fillRect(16,44,16,1),n(2,2,"#212121",.4),n(3,2,"#757575",.1,"bricks"),n(0,3,"#ff6d00",.1),e.fillStyle="#ffab00",e.fillRect(4,52,4,2),e.fillRect(10,58,3,3),i(1,3,"#9e9e9e","#212121"),i(2,3,"#9e9e9e","#d7ccc8"),i(3,3,"#9e9e9e","#00bcd4");const s=new og(t);return s.magFilter=Ee,s.minFilter=Ee,s.colorSpace=Me,s.generateMipmaps=!1,this.material=new Re({map:s,side:_n,transparent:!1,alphaTest:0,depthTest:!0,depthWrite:!0}),this.material}getUVs(t,e){let n=0,i=0;switch(t){case 1:n=0,i=0;break;case 2:e==="top"?(n=2,i=0):e==="bottom"?(n=0,i=0):(n=1,i=0);break;case 3:n=3,i=0;break;case 4:e==="top"||e==="bottom"?(n=1,i=1):(n=0,i=1);break;case 5:n=3,i=1;break;case 6:n=0,i=2;break;case 7:n=2,i=1;break;case 8:n=1,i=2;break;case 9:n=2,i=2;break;case 15:n=0,i=3;break;case 40:n=1,i=3;break;case 41:n=2,i=3;break;case 43:n=3,i=3;break;case 44:n=3,i=2;break;default:n=0,i=0;break}const s=.125,o=n*s,a=1-(i+1)*s,l=.5/128,c=o+l,h=o+s-l,d=a+l,u=a+s-l;return[{u:c,v:u},{u:h,v:u},{u:c,v:d},{u:h,v:d}]}}class j_{constructor(t){this.slots=new Array(36).fill(null),this.hotbarSlot=0,this.uiManager=t}add(t,e=1,n={}){const{skipUI:i=!1,durability:s=null}=n;let o=e;if(this.uiManager.getToolInfo(t)&&s!==null)for(let l=0;l<this.slots.length&&o>0;l++)this.slots[l]||(this.slots[l]={type:t,count:1,durability:s},o--);else{for(let l=0;l<this.slots.length&&o>0;l++){const c=this.slots[l];if(c&&c.type===t&&c.count<64&&!c.durability){const h=64-c.count,d=Math.min(h,o);c.count+=d,o-=d}}for(let l=0;l<this.slots.length&&o>0;l++)if(!this.slots[l]){const c=Math.min(64,o);this.slots[l]={type:t,count:c},o-=c}}return i||this.uiManager.updateInventoryUI(),o===0}remove(t,e,n={}){const{skipUI:i=!1}=n,s=this.slots[this.hotbarSlot];return s&&s.type===t&&s.count>=e?(s.count-=e,s.count===0&&(this.slots[this.hotbarSlot]=null),i||this.uiManager.updateInventoryUI(),!0):!1}consumeSlot(t,e=1){const n=this.slots[t];return!n||n.count<e?!1:(n.count-=e,n.count===0&&(this.slots[t]=null),!0)}canAdd(t,e=1){let n=0;for(const i of this.slots)if(i?i.type===t&&(n+=64-i.count):n+=64,n>=e)return!0;return!1}findHotbarSlotFor(t){let e=null;for(let n=0;n<9;n++){const i=this.slots[n];if(i&&i.type===t&&i.count<64)return n;!i&&e===null&&(e=n)}return e}findMainSlotFor(t){let e=null;for(let n=9;n<36;n++){const i=this.slots[n];if(i&&i.type===t&&i.count<64)return n;!i&&e===null&&(e=n)}return e}moveToHotbar(t){const e=this.slots[t];if(!e)return!1;const n=this.findHotbarSlotFor(e.type);if(n===null)return!1;const i=this.slots[n],s=Math.min(i?64-i.count:64,e.count);return s===0?!1:(i?i.count+=s:this.slots[n]={type:e.type,count:s},e.count-=s,e.count<=0&&(this.slots[t]=null),!0)}moveToMain(t){const e=this.slots[t];if(!e)return!1;const n=this.findMainSlotFor(e.type);if(n===null)return!1;const i=this.slots[n],s=Math.min(i?64-i.count:64,e.count);return s===0?!1:(i?i.count+=s:this.slots[n]={type:e.type,count:s},e.count-=s,e.count<=0&&(this.slots[t]=null),!0)}getSelectedBlock(){const t=this.slots[this.hotbarSlot];return t?t.type:0}getSelectedItem(){return this.slots[this.hotbarSlot]}damageTool(t=1){const e=this.slots[this.hotbarSlot];if(!e)return!1;const n=this.uiManager.getToolInfo(e.type);return n?(e.durability===void 0&&(e.durability=n.maxDurability),e.durability-=t,e.durability<=0?(this.slots[this.hotbarSlot]=null,this.uiManager.updateInventoryUI(),!0):(this.uiManager.updateInventoryUI(),!1)):!1}selectSlot(t){t>=0&&t<9&&(this.hotbarSlot=t,this.uiManager.updateHotbarSelection(t))}}const ie={PICKAXE:"pickaxe",AXE:"axe",SHOVEL:"shovel",SWORD:"sword",ARMOR:"armor"},se={WOOD:{name:"wood",color:9268835},STONE:{name:"stone",color:10395294},IRON:{name:"iron",color:14737632},DIAMOND:{name:"diamond",color:5099745}},hi={pickaxe:["MMMMM"," M M ","  S  ","  S  ","  S  ","  S  ","  S  ","  S  "],axe:[" MM","MMM","MS "," S "," S "," S "," S "," S "],shovel:[" M ","MMM","MMM"," S "," S "," S "," S "," S "],sword:[" M "," M "," M "," M "," M ","SMS"," S "," S "],helmet:["MMMMM","M   M","M   M","     ","     ","     ","     ","     "],chestplate:["M   M","MMMMM","MMMMM","MMMMM","MMMMM","     ","     ","     "],leggings:["MMMMM","MMMMM","M   M","M   M","M   M","     ","     ","     "],boots:["     ","     ","M   M","M   M","M   M","     ","     ","     "],bed:["WWWWW","WWWWW","SSSSS","S   S","     ","     ","     ","     "],chest:["SSSSS","S   S","S M S","S   S","SSSSS","     ","     ","     "],door:["SS","SM","SS","SM","SS","SM","SS","  "]},go={20:{type:ie.PICKAXE,tier:se.WOOD,id:20},21:{type:ie.AXE,tier:se.WOOD,id:21},22:{type:ie.SHOVEL,tier:se.WOOD,id:22},23:{type:ie.SWORD,tier:se.WOOD,id:23},24:{type:ie.PICKAXE,tier:se.STONE,id:24},25:{type:ie.AXE,tier:se.STONE,id:25},26:{type:ie.SHOVEL,tier:se.STONE,id:26},27:{type:ie.SWORD,tier:se.STONE,id:27},28:{type:ie.PICKAXE,tier:se.IRON,id:28},29:{type:ie.AXE,tier:se.IRON,id:29},30:{type:ie.SHOVEL,tier:se.IRON,id:30},31:{type:ie.SWORD,tier:se.IRON,id:31},32:{type:ie.PICKAXE,tier:se.DIAMOND,id:32},33:{type:ie.AXE,tier:se.DIAMOND,id:33},34:{type:ie.SHOVEL,tier:se.DIAMOND,id:34},35:{type:ie.SWORD,tier:se.DIAMOND,id:35},54:{type:ie.ARMOR,part:"helmet",tier:se.IRON,id:54},55:{type:ie.ARMOR,part:"chestplate",tier:se.IRON,id:55},56:{type:ie.ARMOR,part:"leggings",tier:se.IRON,id:56},57:{type:ie.ARMOR,part:"boots",tier:se.IRON,id:57},58:{type:ie.ARMOR,part:"helmet",tier:se.DIAMOND,id:58},59:{type:ie.ARMOR,part:"chestplate",tier:se.DIAMOND,id:59},60:{type:ie.ARMOR,part:"leggings",tier:se.DIAMOND,id:60},61:{type:ie.ARMOR,part:"boots",tier:se.DIAMOND,id:61},70:{type:"bed",id:70},71:{type:"chest",id:71},72:{type:"door",id:72}};class K_{constructor(t){this.inventory=t||null,this.hotbarEl=document.getElementById("hotbar"),this.inventoryHotbarEl=document.getElementById("inventory-hotbar"),this.inventoryGridEl=document.getElementById("inventory-grid"),this.blockTypes=[{id:1,name:"Земля",color:"#5d4037"},{id:2,name:"Трава",color:"#4caf50"},{id:3,name:"Камінь",color:"#757575"},{id:4,name:"Колода",color:"#6d4c41"},{id:5,name:"Пісок",color:"#fff176"},{id:6,name:"Вода",color:"#42a5f5"},{id:7,name:"Листя",color:"#2e7d32"},{id:8,name:"Дошка",color:"#a1887f"},{id:9,name:"Корінна порода",color:"#212121"},{id:10,name:"Палиця",color:"#ffd54f"},{id:11,name:"Сире м'ясо",color:"#ff7043"},{id:12,name:"Вовна",color:"#f5f5f5"},{id:16,name:"Смажене м'ясо",color:"#8b4513"},{id:17,name:"Хліб",color:"#daa520"},{id:18,name:"Пшениця",color:"#f0e68c"},{id:13,name:"Перо",color:"#fff59d"},{id:14,name:"Факел",color:"#ffe082"},{id:15,name:"Лава",color:"#ff6d00"},{id:20,name:"Дерев'яна кірка",color:"#8d6e63"},{id:21,name:"Дерев'яна сокира",color:"#8d6e63"},{id:22,name:"Дерев'яна лопата",color:"#8d6e63"},{id:23,name:"Дерев'яний меч",color:"#8d6e63"},{id:24,name:"Кам'яна кірка",color:"#757575"},{id:25,name:"Кам'яна сокира",color:"#757575"},{id:26,name:"Кам'яна лопата",color:"#757575"},{id:27,name:"Кам'яний меч",color:"#757575"},{id:28,name:"Залізна кірка",color:"#b0bec5"},{id:29,name:"Залізна сокира",color:"#b0bec5"},{id:30,name:"Залізна лопата",color:"#b0bec5"},{id:31,name:"Залізний меч",color:"#b0bec5"},{id:32,name:"Алмазна кірка",color:"#4dd0e1"},{id:33,name:"Алмазна сокира",color:"#4dd0e1"},{id:34,name:"Алмазна лопата",color:"#4dd0e1"},{id:35,name:"Алмазний меч",color:"#4dd0e1"},{id:40,name:"Вугілля",color:"#263238"},{id:41,name:"Залізна руда",color:"#d7ccc8"},{id:42,name:"Залізний злиток",color:"#eceff1"},{id:43,name:"Алмаз",color:"#00bcd4"},{id:44,name:"Бруківка",color:"#616161"},{id:54,name:"Залізний шолом",color:"#b0bec5"},{id:55,name:"Залізний нагрудник",color:"#b0bec5"},{id:56,name:"Залізні поножі",color:"#b0bec5"},{id:57,name:"Залізні чоботи",color:"#b0bec5"},{id:58,name:"Алмазний шолом",color:"#4dd0e1"},{id:59,name:"Алмазний нагрудник",color:"#4dd0e1"},{id:60,name:"Алмазні поножі",color:"#4dd0e1"},{id:61,name:"Алмазні чоботи",color:"#4dd0e1"},{id:70,name:"Ліжко",color:"#ff5555"},{id:71,name:"Скриня",color:"#8b6914"},{id:72,name:"Двері",color:"#8d6e63"}],this.craftSlots=[null,null,null,null],this.craftResult=null,this.recipes=[{name:"Дошки",inputs:[{type:4,count:1}],result:{type:8,count:4}},{name:"Палиці",inputs:[{type:8,count:2}],result:{type:10,count:4}},{name:"Факел",inputs:[{type:10,count:1},{type:40,count:1}],result:{type:14,count:4}},{name:"Дерев'яна кірка",inputs:[{type:8,count:3},{type:10,count:2}],result:{type:20,count:1}},{name:"Дерев'яна сокира",inputs:[{type:8,count:3},{type:10,count:2}],result:{type:21,count:1}},{name:"Дерев'яна лопата",inputs:[{type:8,count:1},{type:10,count:2}],result:{type:22,count:1}},{name:"Дерев'яний меч",inputs:[{type:8,count:2},{type:10,count:1}],result:{type:23,count:1}},{name:"Кам'яна кірка",inputs:[{type:44,count:3},{type:10,count:2}],result:{type:24,count:1}},{name:"Кам'яна сокира",inputs:[{type:44,count:3},{type:10,count:2}],result:{type:25,count:1}},{name:"Кам'яна лопата",inputs:[{type:44,count:1},{type:10,count:2}],result:{type:26,count:1}},{name:"Кам'яний меч",inputs:[{type:44,count:2},{type:10,count:1}],result:{type:27,count:1}},{name:"Залізна кірка",inputs:[{type:42,count:3},{type:10,count:2}],result:{type:28,count:1}},{name:"Залізна сокира",inputs:[{type:42,count:3},{type:10,count:2}],result:{type:29,count:1}},{name:"Залізна лопата",inputs:[{type:42,count:1},{type:10,count:2}],result:{type:30,count:1}},{name:"Залізний меч",inputs:[{type:42,count:2},{type:10,count:1}],result:{type:31,count:1}},{name:"Алмазна кірка",inputs:[{type:43,count:3},{type:10,count:2}],result:{type:32,count:1}},{name:"Алмазна сокира",inputs:[{type:43,count:3},{type:10,count:2}],result:{type:33,count:1}},{name:"Алмазна лопата",inputs:[{type:43,count:1},{type:10,count:2}],result:{type:34,count:1}},{name:"Алмазний меч",inputs:[{type:43,count:2},{type:10,count:1}],result:{type:35,count:1}},{name:"Залізний шолом",inputs:[{type:42,count:5}],result:{type:54,count:1}},{name:"Залізний нагрудник",inputs:[{type:42,count:8}],result:{type:55,count:1}},{name:"Залізні поножі",inputs:[{type:42,count:7}],result:{type:56,count:1}},{name:"Залізні чоботи",inputs:[{type:42,count:4}],result:{type:57,count:1}},{name:"Алмазний шолом",inputs:[{type:43,count:5}],result:{type:58,count:1}},{name:"Алмазний нагрудник",inputs:[{type:43,count:8}],result:{type:59,count:1}},{name:"Алмазні поножі",inputs:[{type:43,count:7}],result:{type:60,count:1}},{name:"Алмазні чоботи",inputs:[{type:43,count:4}],result:{type:61,count:1}},{name:"Залізний злиток",inputs:[{type:41,count:1},{type:40,count:1}],result:{type:42,count:1}},{name:"Смажене м'ясо",inputs:[{type:11,count:1},{type:40,count:1}],result:{type:16,count:1}},{name:"Хліб",inputs:[{type:18,count:3}],result:{type:17,count:1}},{name:"Ліжко",inputs:[{type:8,count:3},{type:12,count:3}],result:{type:70,count:1}},{name:"Скриня",inputs:[{type:8,count:8}],result:{type:71,count:1}},{name:"Двері",inputs:[{type:8,count:6}],result:{type:72,count:1}}],this.initCraftingUI(),this.initRecipeGuide(),this.inventory&&this.setInventory(this.inventory)}initRecipeGuide(){const t=document.getElementById("recipe-guide-btn"),e=document.getElementById("recipe-guide-panel"),n=document.getElementById("recipe-guide-close");t&&(t.onclick=()=>{e.style.display="block",this.renderRecipeGuide()}),n&&(n.onclick=()=>{e.style.display="none"})}renderRecipeGuide(){const t=document.getElementById("recipe-guide-content");if(!t)return;t.innerHTML="";const e={Базове:this.recipes.slice(0,3),"Дерев'яні інструменти":this.recipes.slice(3,7),"Кам'яні інструменти":this.recipes.slice(7,11),"Залізні інструменти":this.recipes.slice(11,15),"Алмазні інструменти":this.recipes.slice(15,19),"Залізна броня":this.recipes.slice(19,23),"Алмазна броня":this.recipes.slice(23,27),"Спеціальні предмети":this.recipes.slice(28,31),"Їжа та переплавка":this.recipes.slice(27)};for(const[n,i]of Object.entries(e)){const s=document.createElement("div");s.className="recipe-category";const o=document.createElement("h4");o.textContent=n,s.appendChild(o);for(const a of i){const l=document.createElement("div");l.className="recipe-item";const c=document.createElement("div");c.className="recipe-inputs";for(const u of a.inputs){const p=document.createElement("div");p.className="recipe-slot",this.renderItem(p,u),c.appendChild(p)}l.appendChild(c);const h=document.createElement("div");h.className="recipe-arrow",h.textContent="→",l.appendChild(h);const d=document.createElement("div");d.className="recipe-slot",this.renderItem(d,a.result,!0),l.appendChild(d),s.appendChild(l)}t.appendChild(s)}}setInventory(t){this.inventory=t,this.initHotbar(),this.updateInventoryUI()}getBlockColor(t){const e=this.blockTypes.find(n=>n.id===t);return e?e.color:"#ff00ff"}getBlockName(t){const e=this.blockTypes.find(n=>n.id===t);return e?e.name:"Unknown"}initHotbar(){if(this.hotbarEl){this.hotbarEl.innerHTML="";for(let t=0;t<9;t++){const e=document.createElement("div");e.className="slot",e.dataset.index=t,t===0&&e.classList.add("active");const n=document.createElement("div");n.className="slot-content",e.appendChild(n),e.onclick=()=>{this.inventory&&this.inventory.selectSlot(t)},this.hotbarEl.appendChild(e)}}}updateHotbarSelection(t){if(!this.hotbarEl)return;const e=this.hotbarEl.querySelectorAll(".slot");e.forEach(n=>n.classList.remove("active")),e[t]&&e[t].classList.add("active")}initCraftingUI(){document.querySelectorAll(".crafting-slot").forEach((e,n)=>{e.dataset.craftIndex=n})}updateInventoryUI(){if(!this.inventory)return;const t=this.hotbarEl.querySelectorAll(".slot");for(let e=0;e<9;e++){const n=this.inventory.slots[e],i=t[e].querySelector(".slot-content");i&&(i.innerHTML="",n&&this.renderItem(i,n))}if(this.inventoryHotbarEl){this.inventoryHotbarEl.innerHTML="";for(let e=0;e<9;e++){const n=this.inventory.slots[e],i=document.createElement("div");i.className="inv-slot",i.addEventListener("click",s=>this.handleSlotClick(e,s)),n&&this.renderItem(i,n),this.inventoryHotbarEl.appendChild(i)}}if(this.inventoryGridEl){this.inventoryGridEl.innerHTML="";for(let e=9;e<36;e++){const n=this.inventory.slots[e],i=document.createElement("div");i.className="inv-slot",i.addEventListener("click",s=>this.handleSlotClick(e,s)),n&&this.renderItem(i,n),this.inventoryGridEl.appendChild(i)}}this.checkRecipes(),this.updateCraftingUI()}renderItem(t,e,n=!1){t.innerHTML="",t.style.position="relative";const i=go[e.type];if(i){const l=document.createElement("canvas");l.width=32,l.height=32,l.style.width="24px",l.style.height="24px",l.style.margin="auto",l.style.imageRendering="pixelated";const c=l.getContext("2d");let h,d;if(i.type==="armor"?(h=hi[i.part],d={S:"#6d4c41",M:"#"+i.tier.color.toString(16).padStart(6,"0")}):i.type==="bed"?(h=hi.bed,d={W:"#ff5555",S:"#8d6e63"}):i.type==="chest"?(h=hi.chest,d={S:"#8b6914",M:"#4a4a4a"}):i.type==="door"?(h=hi.door,d={S:"#8d6e63",M:"#4a4a4a"}):(h=hi[i.type],d={S:"#6d4c41",M:"#"+i.tier.color.toString(16).padStart(6,"0")}),h)for(let p=0;p<h.length;p++)for(let g=0;g<h[p].length;g++){const _=h[p][g];_!==" "&&d[_]&&(c.fillStyle=d[_],c.fillRect(g*4,p*4,4,4))}t.appendChild(l)}else{const l=document.createElement("div");l.style.width="20px",l.style.height="20px",l.style.backgroundColor=this.getBlockColor(e.type),l.style.margin="auto",l.style.borderRadius="3px",l.style.border="2px solid rgba(0,0,0,0.1)",l.style.borderTop="2px solid rgba(255,255,255,0.2)",l.style.borderLeft="2px solid rgba(255,255,255,0.2)",t.appendChild(l)}const s=document.createElement("div");s.innerText=e.count||1,s.style.fontSize="10px",s.style.position="absolute",s.style.bottom="0",s.style.right="0",s.style.color="white",s.style.fontWeight="bold",s.style.textShadow="1px 1px 0 #000";const o=this.getToolInfo(e.type);let a=this.getBlockName(e.type);if(o&&e.durability!==void 0){s.innerText=`${e.durability}/${o.maxDurability}`,s.style.fontSize="8px",a+=` (${e.durability}/${o.maxDurability})`;const l=document.createElement("div");l.style.position="absolute",l.style.bottom="-2px",l.style.left="2px",l.style.right="2px",l.style.height="2px",l.style.backgroundColor="#333";const c=document.createElement("div"),h=e.durability/o.maxDurability;c.style.width=`${h*100}%`,c.style.height="100%",c.style.backgroundColor=h>.5?"#4caf50":h>.2?"#ff9800":"#f44336",l.appendChild(c),t.appendChild(l)}if(t.title=a,t.dataset.itemType=e.type,(!o||e.count>1)&&t.appendChild(s),n){const l=document.createElement("div");l.style.position="absolute",l.style.bottom="-18px",l.style.left="-10px",l.style.right="-10px",l.style.fontSize="10px",l.style.color="#fff",l.style.textAlign="center",l.style.textShadow="1px 1px 2px #000",l.style.whiteSpace="nowrap",l.style.overflow="hidden",l.style.textOverflow="ellipsis",l.innerText=this.getBlockName(e.type),t.appendChild(l)}}getToolInfo(t){return{20:{type:"pickaxe",tier:"wood",speed:2,maxDurability:60},21:{type:"axe",tier:"wood",speed:2,maxDurability:60},22:{type:"shovel",tier:"wood",speed:2,maxDurability:60},23:{type:"sword",tier:"wood",speed:1.5,maxDurability:60},24:{type:"pickaxe",tier:"stone",speed:4,maxDurability:132},25:{type:"axe",tier:"stone",speed:4,maxDurability:132},26:{type:"shovel",tier:"stone",speed:4,maxDurability:132},27:{type:"sword",tier:"stone",speed:3,maxDurability:132},28:{type:"pickaxe",tier:"iron",speed:6,maxDurability:251},29:{type:"axe",tier:"iron",speed:6,maxDurability:251},30:{type:"shovel",tier:"iron",speed:6,maxDurability:251},31:{type:"sword",tier:"iron",speed:4,maxDurability:251},32:{type:"pickaxe",tier:"diamond",speed:8,maxDurability:1562},33:{type:"axe",tier:"diamond",speed:8,maxDurability:1562},34:{type:"shovel",tier:"diamond",speed:8,maxDurability:1562},35:{type:"sword",tier:"diamond",speed:6,maxDurability:1562},54:{type:"armor",part:"helmet",tier:"iron",maxDurability:165},55:{type:"armor",part:"chestplate",tier:"iron",maxDurability:240},56:{type:"armor",part:"leggings",tier:"iron",maxDurability:225},57:{type:"armor",part:"boots",tier:"iron",maxDurability:195},58:{type:"armor",part:"helmet",tier:"diamond",maxDurability:363},59:{type:"armor",part:"chestplate",tier:"diamond",maxDurability:528},60:{type:"armor",part:"leggings",tier:"diamond",maxDurability:495},61:{type:"armor",part:"boots",tier:"diamond",maxDurability:429}}[t]||null}handleSlotClick(t,e){if(this.inventory.slots[t]){if(e&&e.shiftKey){(t>=9?this.inventory.moveToHotbar(t):this.inventory.moveToMain(t))&&this.updateInventoryUI();return}this.moveToCrafting(t)}}moveToCrafting(t){const e=this.inventory.slots[t];if(!e)return;let n=-1;for(let s=0;s<this.craftSlots.length;s++)if(this.craftSlots[s]&&this.craftSlots[s].type===e.type){n=s;break}n===-1&&(n=this.findEmptyCraftSlot()),!(n===-1||!this.inventory.consumeSlot(t))&&(this.craftSlots[n]?this.craftSlots[n].count+=1:this.craftSlots[n]={type:e.type,count:1},this.checkRecipes(),this.updateInventoryUI())}findCraftSlotFor(t){return-1}findEmptyCraftSlot(){for(let t=0;t<this.craftSlots.length;t++)if(!this.craftSlots[t])return t;return-1}returnCraftingSlot(t){const e=this.craftSlots[t];!e||!this.inventory.add(e.type,e.count,{skipUI:!0})||(this.craftSlots[t]=null,this.checkRecipes(),this.updateInventoryUI())}checkRecipes(){this.craftResult=null;for(const t of this.recipes)if(this.matchesRecipe(t)){this.craftResult=t;return}}matchesRecipe(t){const e={};let n=0;for(const s of this.craftSlots)s&&(e[s.type]=(e[s.type]||0)+s.count,n+=s.count);let i=0;for(const s of t.inputs)if(i+=s.count,(e[s.type]||0)<s.count)return!1;if(n!==i)return!1;for(const s in e){const o=t.inputs.find(a=>a.type===parseInt(s));if(!o||e[s]!==o.count)return!1}return!0}completeCraft(){if(!this.craftResult)return;const{type:t,count:e}=this.craftResult.result;if(!this.inventory.canAdd(t,e))return;for(const i of this.craftResult.inputs){let s=i.count;for(let o=0;o<this.craftSlots.length&&s>0;o++){const a=this.craftSlots[o];if(a&&a.type===i.type){const l=Math.min(a.count,s);a.count-=l,s-=l,a.count===0&&(this.craftSlots[o]=null)}}}const n=this.getToolInfo(t);n?this.inventory.add(t,e,{skipUI:!0,durability:n.maxDurability}):this.inventory.add(t,e,{skipUI:!0}),this.checkRecipes(),this.updateInventoryUI()}updateCraftingUI(){document.querySelectorAll("#crafting-panel .crafting-slot").forEach((i,s)=>{i.innerHTML="";const o=this.craftSlots[s];o&&this.renderItem(i,o),i.onclick=()=>this.returnCraftingSlot(s)});const e=document.getElementById("crafting-result"),n=document.getElementById("crafting-result-name");n&&(n.innerText=this.craftResult?this.craftResult.name:"Рецепт не знайдено"),e&&(e.innerHTML="",this.craftResult?(this.renderItem(e,this.craftResult.result),e.onclick=()=>this.completeCraft(),e.style.cursor="pointer",e.title=`Створити ${this.craftResult.name}`):(e.onclick=null,e.style.cursor="default",e.title=""))}}class $_{constructor(t){this.scene=t,this.group=new We,this.scene.add(this.group),this.clouds=[],this.radius=120,this.baseY=85,this.speed=3;const e=new Re({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),n=()=>{const i=new We,s=new jt(6,3,4),o=3+Math.floor(Math.random()*4);for(let a=0;a<o;a++){const l=new Pt(s,e);l.position.set((Math.random()-.5)*10,(Math.random()-.5)*2,(Math.random()-.5)*8),l.scale.set(.8+Math.random()*1.4,.8+Math.random()*1.1,.8+Math.random()*1.4),i.add(l)}return i};for(let i=0;i<18;i++){const s=n();s.position.set((Math.random()-.5)*this.radius*2,this.baseY+Math.random()*18,(Math.random()-.5)*this.radius*2),s.userData.vx=(.3+Math.random()*.7)*(Math.random()<.5?1:-1),s.userData.vz=(.2+Math.random()*.6)*(Math.random()<.5?1:-1),this.group.add(s),this.clouds.push(s)}}update(t,e){if(!t)return;const n=(e==null?void 0:e.x)??0,i=(e==null?void 0:e.z)??0;for(const s of this.clouds){s.position.x+=s.userData.vx*this.speed*t,s.position.z+=s.userData.vz*this.speed*t;const o=s.position.x-n,a=s.position.z-i;o>this.radius&&(s.position.x-=this.radius*2),o<-this.radius&&(s.position.x+=this.radius*2),a>this.radius&&(s.position.z-=this.radius*2),a<-this.radius&&(s.position.z+=this.radius*2)}}}class Z_{constructor(t,e){this.scene=t,this.camera=e,this.handGroup=new We,this.currentTool=null,this.currentToolType=null,this.animationTime=0,this.swingTime=0,this.isSwinging=!1,this.createHand(),this.handGroup.position.set(.25,-.25,-.4),this.handGroup.rotation.set(0,-.1,0),this.camera.add(this.handGroup)}createVoxelMesh(t,e,n=1){const i=new We,s=.02,o=t.length,a=t[0].length,l=-(a*s)/2,c=-(o*s)/2,h=-(n*s)/2,d=new jt(s,s,s);for(let u=0;u<o;u++)for(let p=0;p<a;p++){const g=t[u][p];if(g!==" "&&e[g]){const _=new Re({color:e[g]});for(let m=0;m<n;m++){const f=new Pt(d,_);f.position.set(l+p*s,-c-u*s,h+m*s),f.castShadow=!0,f.receiveShadow=!0,i.add(f)}}}return i}createHand(){this.handGroup.clear();const t=new jt(.08,.24,.08),e=new Re({color:16032864}),n=new Pt(t,e);n.position.set(0,-.12,0),this.handGroup.add(n),this.arm=n}setTool(t){if(this.currentToolType===t||(this.currentTool&&(this.handGroup.remove(this.currentTool),this.currentTool=null),this.currentToolType=t,!t))return;const e=go[t];e&&(this.currentTool=this.createToolMesh(e),this.currentTool&&(this.currentTool.scale.set(1.5,1.5,1.5),this.currentTool.position.set(0,.1,-.15),this.currentTool.rotation.set(0,Math.PI/2,0),this.handGroup.add(this.currentTool)))}getToolInfo(t){return go[t]||null}createToolMesh(t){if(!t)return null;const e={S:7162945,M:t.tier?t.tier.color:16777215};let n=null;if(t.type==="armor"?n=hi[t.part]:n=hi[t.type],!n)return null;const i=n.map(s=>s.split(""));return this.createVoxelMesh(i,e,1)}startSwing(){this.isSwinging=!0,this.swingTime=0}update(t,e){const n=e?e.type:null,i=e?this.getToolInfo(e.type):null;this.setTool(i?n:null),this.animationTime+=t;const s=Math.sin(this.animationTime*2.5)*.008,o=Math.sin(this.animationTime*1.8)*.015;if(this.isSwinging){this.swingTime+=t*10,this.swingTime>=Math.PI&&(this.isSwinging=!1,this.swingTime=0);const a=Math.sin(this.swingTime);this.handGroup.rotation.x=-a*1.2,this.handGroup.rotation.y=-.5+a*.5,this.handGroup.position.z=-.6-a*.3,this.handGroup.position.y=-.25-a*.1}else this.handGroup.rotation.x=Vn.lerp(this.handGroup.rotation.x,s*.5,.1),this.handGroup.rotation.y=Vn.lerp(this.handGroup.rotation.y,-.3+o*.5,.1),this.handGroup.rotation.z=Vn.lerp(this.handGroup.rotation.z,o*.2,.1),this.handGroup.position.y=Vn.lerp(this.handGroup.position.y,-.25+s,.1),this.handGroup.position.x=Vn.lerp(this.handGroup.position.x,.35+o,.1),this.handGroup.position.z=Vn.lerp(this.handGroup.position.z,-.6,.1)}}class J_{constructor(t){this.scene=t,this.dayLength=600,this.currentTime=0,this.sunLight=null,this.moonLight=null,this.ambientLight=null,this.skyColors={day:new xt(8900331),sunset:new xt(16739125),night:new xt(657946),sunrise:new xt(16751983)},this.fogColors={day:new xt(8900331),sunset:new xt(13391155),night:new xt(657946),sunrise:new xt(14513988)},this.setupLights(),this.createSunMoon()}setupLights(){const t=[];this.scene.traverse(e=>{e.isLight&&t.push(e)}),t.forEach(e=>this.scene.remove(e)),this.ambientLight=new pg(16777215,.6),this.scene.add(this.ambientLight),this.sunLight=new fo(16777215,.8),this.sunLight.position.set(50,100,50),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=500,this.sunLight.shadow.camera.left=-50,this.sunLight.shadow.camera.right=50,this.sunLight.shadow.camera.top=50,this.sunLight.shadow.camera.bottom=-50,this.scene.add(this.sunLight),this.moonLight=new fo(6711039,.2),this.moonLight.position.set(-50,100,-50),this.moonLight.visible=!1,this.scene.add(this.moonLight)}createSunMoon(){const t=new hr(5,16,16),e=new Ss({color:16776960});this.sun=new Pt(t,e),this.scene.add(this.sun);const n=new hr(4,16,16),i=new Ss({color:14540287});this.moon=new Pt(n,i),this.moon.visible=!1,this.scene.add(this.moon)}update(t,e){this.currentTime+=t/this.dayLength,this.currentTime>=1&&(this.currentTime-=1);const n=this.getTimeOfDay();this.updateSkyColor(),this.updateLighting(n),this.updateCelestialBodies(e)}getTimeOfDay(){return this.currentTime<.23?"night":this.currentTime<.27?"sunrise":this.currentTime<.73?"day":this.currentTime<.77?"sunset":"night"}updateSkyColor(){let t,e;if(this.currentTime<.23)t=this.skyColors.night,e=this.fogColors.night;else if(this.currentTime<.27){const n=(this.currentTime-.23)/.04;t=new xt().lerpColors(this.skyColors.night,this.skyColors.sunrise,n),e=new xt().lerpColors(this.fogColors.night,this.fogColors.sunrise,n)}else if(this.currentTime<.73){const n=Math.min((this.currentTime-.27)/.1,1);t=new xt().lerpColors(this.skyColors.sunrise,this.skyColors.day,n),e=new xt().lerpColors(this.fogColors.sunrise,this.fogColors.day,n)}else if(this.currentTime<.77){const n=(this.currentTime-.73)/.04;t=new xt().lerpColors(this.skyColors.day,this.skyColors.sunset,n),e=new xt().lerpColors(this.fogColors.day,this.fogColors.sunset,n)}else{const n=Math.min((this.currentTime-.77)/.1,1);t=new xt().lerpColors(this.skyColors.sunset,this.skyColors.night,n),e=new xt().lerpColors(this.fogColors.sunset,this.fogColors.night,n)}this.scene.background=t,this.scene.fog&&(this.scene.fog.color=e)}updateLighting(t){const e=t==="night";let n,i;if(this.currentTime<.25)n=.3,i=0;else if(this.currentTime<.3){const s=(this.currentTime-.25)/.05;n=.3+s*.3,i=s*.8}else if(this.currentTime<.7)n=.6,i=.8;else if(this.currentTime<.75){const s=(this.currentTime-.7)/.05;n=.6-s*.3,i=.8-s*.8}else n=.3,i=0;this.ambientLight.intensity=n,this.sunLight.intensity=i,this.moonLight.intensity=e?.2:0,this.moonLight.visible=e,t==="sunrise"||t==="sunset"?this.sunLight.color.setHex(16755302):this.sunLight.color.setHex(16777215)}updateCelestialBodies(t){const e=this.currentTime*Math.PI*2,n=150,i=100,s=t.x+Math.cos(e)*n,o=Math.sin(e)*i,a=t.z+Math.sin(e)*n;this.sun.position.set(s,Math.max(o,-50),a),this.sun.visible=o>-20,this.sunLight.position.set(s,Math.max(o,50),a);const l=e+Math.PI,c=t.x+Math.cos(l)*n,h=Math.sin(l)*i,d=t.z+Math.sin(l)*n;this.moon.position.set(c,Math.max(h,-50),d),this.moon.visible=h>-20,this.moonLight.position.set(c,Math.max(h,50),d)}isNight(){return this.currentTime<.25||this.currentTime>.75}isDark(){return this.currentTime<.25||this.currentTime>.73}getTimeString(){const t=Math.floor(this.currentTime*24),e=Math.floor(this.currentTime*24*60%60);return`${t.toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}setTime(t){this.currentTime=t%1}skipToMorning(){this.currentTime=.25}}class Q_{constructor(t,e,n){this.scene=t,this.physicsWorld=e,this.world=n,this.monsters=[],this.maxMonsters=15,this.spawnRadius=25,this.minSpawnDistance=10,this.spawnTimer=0,this.spawnInterval=2,this.monsterMaterial=new Zn("monster"),this.blockMaterial=new Zn("block"),this.physicsWorld.addContactMaterial(new Qi(this.monsterMaterial,this.blockMaterial,{friction:.3,restitution:0})),this.monsterTypes={zombie:{name:"Зомбі",health:20,damage:3,speed:2.5,color:4022310,headColor:5074998,drop:{type:11,count:1}},skeleton:{name:"Скелет",health:15,damage:2,speed:3,color:14540253,headColor:16777215,drop:{type:13,count:2}},creeper:{name:"Кріпер",health:20,damage:25,speed:2.5,color:1025807,headColor:1025807,explodes:!0,drop:{type:40,count:1}}}}spawnMonster(t,e){const n=this.monsterTypes[t];if(!n)return null;const i=new We,s=new jt(.6,1.2,.3),o=new Re({color:n.color}),a=new Pt(s,o);a.position.y=.6,a.castShadow=!0,i.add(a);const l=new jt(.5,.5,.5),c=new Re({color:n.headColor}),h=new Pt(l,c);h.position.y=1.45,h.castShadow=!0,i.add(h);const d=new jt(.12,.12,.05);let u=16711680;(t==="creeper"||t==="skeleton")&&(u=0);const p=new Ss({color:u}),g=new Pt(d,p);g.position.set(-.15,1.55,.26),i.add(g);const _=new Pt(d,p);_.position.set(.15,1.55,.26),i.add(_);const m=new jt(.3,.8,.3),f=new Pt(m,o);f.position.set(-.45,.8,0),f.castShadow=!0,i.add(f);const v=new Pt(m,o);v.position.set(.45,.8,0),v.castShadow=!0,i.add(v);const y=new jt(.3,.8,.3),M=new Pt(y,o);M.position.set(-.15,0,0),M.castShadow=!0,i.add(M);const A=new Pt(y,o);A.position.set(.15,0,0),A.castShadow=!0,i.add(A),i.position.copy(e),this.scene.add(i);const w=new $n(new x(.3,.9,.15)),C=new ct({mass:80,position:new x(e.x,e.y+.9,e.z),shape:w,linearDamping:.9,angularDamping:.99,fixedRotation:!0,material:this.monsterMaterial});this.physicsWorld.addBody(C);const O={type:t,profile:n,mesh:i,body:C,health:n.health,maxHealth:n.health,target:null,attackCooldown:0,explodeTimer:-1,animationTime:Math.random()*Math.PI*2,bodyParts:{body:a,head:h,leftArm:f,rightArm:v,leftLeg:M,rightLeg:A},colliderMap:new Map};return this.monsters.push(O),O}update(t,e,n){n&&n.isDark()&&(this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&this.monsters.length<this.maxMonsters&&(this.trySpawnMonster(e),this.spawnTimer=0));for(let i=this.monsters.length-1;i>=0;i--){const s=this.monsters[i];if(s.health<=0){this.removeMonster(i);continue}if(s.body.position.y<-50){this.removeMonster(i);continue}if(this.updateMonsterColliders(s),this.updateMonsterAI(s,e,t),s.mesh.position.set(s.body.position.x,s.body.position.y-.9,s.body.position.z),this.updateMonsterAnimation(s,t),s.target){const o=new z(e.body.position.x-s.body.position.x,0,e.body.position.z-s.body.position.z),a=Math.atan2(o.x,o.z);s.mesh.rotation.y=a}}}trySpawnMonster(t){for(let e=0;e<10;e++){const n=Math.random()*Math.PI*2,i=this.minSpawnDistance+Math.random()*(this.spawnRadius-this.minSpawnDistance),s=t.body.position.x+Math.cos(n)*i,o=t.body.position.z+Math.sin(n)*i;let a=null;for(let d=Math.floor(t.body.position.y)+20;d>=Math.floor(t.body.position.y)-10;d--){const u=this.world.getBlock(Math.floor(s),d,Math.floor(o)),p=this.world.getBlock(Math.floor(s),d+1,Math.floor(o)),g=this.world.getBlock(Math.floor(s),d+2,Math.floor(o));if(u!==0&&u!==6&&u!==15&&p===0&&g===0){a=d;break}}if(a===null)continue;const l=this.world.getBlock(Math.floor(s),a,Math.floor(o));if(l===6||l===15||Math.abs(a-t.body.position.y)>15)continue;const c=Object.keys(this.monsterTypes),h=c[Math.floor(Math.random()*c.length)];this.spawnMonster(h,new z(s,a+1.5,o)),console.log(`✅ Заспавнено ${h} на (${Math.floor(s)}, ${a}, ${Math.floor(o)}) - відстань від гравця: ${i.toFixed(1)}`);return}console.log("❌ Не вдалося знайти місце для спавну монстра")}updateMonsterAI(t,e,n){const i=new z(e.body.position.x-t.body.position.x,e.body.position.y-t.body.position.y,e.body.position.z-t.body.position.z),s=Math.sqrt(i.x*i.x+i.z*i.z);if(s<30){if(t.target=e,t.profile.explodes&&s<3)if(t.explodeTimer<0)t.explodeTimer=1.5;else{t.explodeTimer-=n;const o=Math.sin(t.explodeTimer*20)>0;if(t.bodyParts.body.material.color.setHex(o?16777215:t.profile.color),t.explodeTimer<=0){this.explodeCreeper(t,e);return}}else t.explodeTimer=-1;if(s>2){i.normalize();const o=new x(i.x*t.profile.speed,t.body.velocity.y,i.z*t.profile.speed);t.body.velocity.x=o.x,t.body.velocity.z=o.z}else t.attackCooldown-=n,t.attackCooldown<=0&&(this.attackPlayer(t,e),t.attackCooldown=1.5)}else t.target=null,t.body.velocity.x*=.9,t.body.velocity.z*=.9}updateMonsterAnimation(t,e){if(t.animationTime+=e*3,Math.abs(t.body.velocity.x)>.1||Math.abs(t.body.velocity.z)>.1){const i=Math.sin(t.animationTime)*.5;t.bodyParts.leftArm.rotation.x=i,t.bodyParts.rightArm.rotation.x=-i,t.bodyParts.leftLeg.rotation.x=-i,t.bodyParts.rightLeg.rotation.x=i}else t.bodyParts.leftArm.rotation.x*=.9,t.bodyParts.rightArm.rotation.x*=.9,t.bodyParts.leftLeg.rotation.x*=.9,t.bodyParts.rightLeg.rotation.x*=.9}attackPlayer(t,e){if(!e.takeDamage)return;e.takeDamage(t.profile.damage);const n=new z(e.body.position.x-t.body.position.x,.5,e.body.position.z-t.body.position.z).normalize();e.body.velocity.x+=n.x*5,e.body.velocity.y+=n.y*5,e.body.velocity.z+=n.z*5}explodeCreeper(t,e){const n=Math.sqrt(Math.pow(e.body.position.x-t.body.position.x,2)+Math.pow(e.body.position.z-t.body.position.z,2));if(n<5){const l=t.profile.damage*(1-n/5);e.takeDamage&&e.takeDamage(l)}const i=Math.floor(t.body.position.x),s=Math.floor(t.body.position.y),o=Math.floor(t.body.position.z);for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++)for(let h=-2;h<=2;h++)Math.sqrt(l*l+c*c+h*h)<=2&&Math.random()>.3&&this.world.setBlock(i+l,s+c,o+h,0);const a=this.monsters.indexOf(t);a!==-1&&this.removeMonster(a)}damageMonster(t,e){t.health-=e;const n=t.profile.color;t.bodyParts.body.material.color.setHex(16711680),setTimeout(()=>{t.bodyParts.body&&t.bodyParts.body.material.color.setHex(n)},100)}removeMonster(t){const e=this.monsters[t];if(e.profile.drop&&e.health<=0&&(e.dropPosition=new z().copy(e.mesh.position)),e.colliderMap){for(const[n,i]of e.colliderMap)this.physicsWorld.removeBody(i);e.colliderMap.clear()}this.scene.remove(e.mesh),this.physicsWorld.removeBody(e.body),this.monsters.splice(t,1)}raycastMonster(t){for(const e of this.monsters)if(t.intersectObject(e.mesh,!0).length>0)return e;return null}clearAllMonsters(){for(;this.monsters.length>0;)this.removeMonster(0)}updateMonsterColliders(t){const n=Math.floor(t.body.position.x),i=Math.floor(t.body.position.y),s=Math.floor(t.body.position.z),o=new Set;for(let a=n-2;a<=n+2;a++)for(let l=i-2;l<=i+2;l++)for(let c=s-2;c<=s+2;c++){const h=this.world.getBlock(a,l,c);if(h!==0&&h!==6&&h!==7&&h!==15){const d=`${a},${l},${c}`;if(o.add(d),!t.colliderMap.has(d)){const u=new ct({mass:0,position:new x(a+.5,l+.5,c+.5),shape:new $n(new x(.5,.5,.5)),material:this.blockMaterial});this.physicsWorld.addBody(u),t.colliderMap.set(d,u)}}}for(const[a,l]of t.colliderMap)o.has(a)||(this.physicsWorld.removeBody(l),t.colliderMap.delete(a))}}class tv{constructor(t,e,n){this.scene=t,this.world=e,this.physicsWorld=n,this.objects=new Map}clearAll(){var e,n,i;const t=Array.from(this.objects.keys());for(const s of t){const o=this.objects.get(s);if(o){if(o.type==="door_top"){this.objects.delete(s);continue}this.removeObject(((e=o.position)==null?void 0:e.x)??parseInt(s.split(",")[0],10),((n=o.position)==null?void 0:n.y)??parseInt(s.split(",")[1],10),((i=o.position)==null?void 0:i.z)??parseInt(s.split(",")[2],10))}}this.objects.clear()}exportState(){const t=[];for(const[,e]of this.objects)!e||e.type==="door_top"||t.push({type:e.type,position:e.position,rotation:e.rotation??0,data:e.data??{}});return t}importState(t){var e,n;if(this.clearAll(),!!Array.isArray(t))for(const i of t){if(!i||typeof i!="object")continue;const{type:s,position:o,rotation:a,data:l}=i;if(!o||!this.placeObject(s,o.x,o.y,o.z,a??0))continue;const h=this.getObject(o.x,o.y,o.z);h&&h.data&&l&&(h.data=structuredClone?structuredClone(l):JSON.parse(JSON.stringify(l)),h.type===72&&h.data.isOpen&&(h.physicsBody&&this.physicsWorld.removeBody(h.physicsBody),(n=(e=h.mesh)==null?void 0:e.userData)!=null&&n.door&&(h.mesh.userData.door.rotation.y=-Math.PI/2)))}}placeObject(t,e,n,i,s=0){const o=`${e},${n},${i}`;if(t===72){if(this.world.getBlock(e,n,i)!==0||this.world.getBlock(e,n+1,i)!==0||this.objects.has(o)||this.objects.has(`${e},${n+1},${i}`))return!1}else this.objects.has(o)&&this.removeObject(e,n,i);let a,l={type:t,position:{x:e,y:n,z:i},rotation:s,data:{}};if(t===70?(a=this.createBed(),l.data.sleepable=!0):t===71?(a=this.createChest(),l.data.inventory=new Array(27).fill(null)):t===72&&(a=this.createDoor(),l.data.isOpen=!1,l.data.multiBlock=!0,l.data.topBlock=`${e},${n+1},${i}`),a){if(a.position.set(e+.5,n,i+.5),a.rotation.y=s,a.castShadow=!0,a.receiveShadow=!0,this.scene.add(a),l.mesh=a,t===72){let c=0,h=0;const d=s%(Math.PI*2);Math.abs(d)<.1?h=.4:Math.abs(d-Math.PI/2)<.1?c=-.4:Math.abs(d-Math.PI)<.1?h=-.4:c=.4;const u=new ct({mass:0,position:new x(e+.5+c,n+1,i+.5+h),shape:new $n(new x(.45,1,.1))});u.quaternion.setFromEuler(0,s,0),this.physicsWorld.addBody(u),l.physicsBody=u,this.objects.set(l.data.topBlock,{type:"door_top",bottomBlock:o,mesh:a})}return this.objects.set(o,l),!0}return!1}createBed(){const t=new We,e=new jt(1,.2,2),n=new Re({color:9268835}),i=new Pt(e,n);i.position.y=.4,t.add(i);const s=new jt(.9,.3,1.9),o=new Re({color:16733525}),a=new Pt(s,o);a.position.y=.65,t.add(a);const l=new jt(.7,.15,.5),c=new Re({color:16777215}),h=new Pt(l,c);h.position.set(0,.875,-.65),t.add(h);const d=new jt(.1,.3,.1),u=new Re({color:7162945});return[[-.4,.15,-.9],[.4,.15,-.9],[-.4,.15,.9],[.4,.15,.9]].forEach(g=>{const _=new Pt(d,u);_.position.set(...g),t.add(_)}),t}createChest(){const t=new We,e=new jt(.875,.875,.875),n=new Re({color:9136404}),i=new Pt(e,n);i.position.y=.4375,t.add(i);const s=new jt(.875,.25,.875),o=new Re({color:10910747}),a=new Pt(s,o);a.position.y=1,a.position.z=0,a.geometry.translate(0,0,-.4375),t.add(a);const l=new jt(.15,.15,.05),c=new Re({color:4868682}),h=new Pt(l,c);return h.position.set(0,.5,.45),t.add(h),t.userData.lid=a,t.userData.lock=h,t}createDoor(){const t=new We,e=new jt(.875,1.875,.1875),n=new Re({color:9268835}),i=new Pt(e,n);i.geometry.translate(.4375,0,0),i.position.set(-.4375,.9375,0),t.add(i);const s=new jt(.08,1.9,.05),o=new Re({color:7162945}),a=new Pt(s,o);a.position.set(.05,0,0),i.add(a);const l=new Pt(s,o);l.position.set(.825,0,0),i.add(l);const c=new jt(.08,.15,.1),h=new Re({color:8947848}),d=new Pt(c,h);return d.position.set(.75,0,.12),i.add(d),t.userData.door=i,t}toggleDoor(t,e,n){const i=`${t},${e},${n}`,s=this.objects.get(i);if(s&&s.type===72){s.data.isOpen=!s.data.isOpen,s.physicsBody&&(s.data.isOpen?this.physicsWorld.removeBody(s.physicsBody):this.physicsWorld.addBody(s.physicsBody));const o=s.data.isOpen?-Math.PI/2:0,a=()=>{const l=s.mesh.userData.door.rotation.y,c=o-l;Math.abs(c)>.01?(s.mesh.userData.door.rotation.y+=c*.2,requestAnimationFrame(a)):s.mesh.userData.door.rotation.y=o};return a(),!0}return!1}getObject(t,e,n){const i=`${t},${e},${n}`;return this.objects.get(i)}removeObject(t,e,n){const i=`${t},${e},${n}`,s=this.objects.get(i);if(s){if(s.type==="door_top"){const o=s.bottomBlock,a=this.objects.get(o);if(a)return this.removeObject(a.position.x,a.position.y,a.position.z)}return s.data&&s.data.topBlock&&this.objects.delete(s.data.topBlock),s.mesh&&s.type!=="door_top"&&(this.scene.remove(s.mesh),s.mesh.traverse(o=>{o.geometry&&o.geometry.dispose(),o.material&&(Array.isArray(o.material)?o.material.forEach(a=>a.dispose()):o.material.dispose())})),s.physicsBody&&this.physicsWorld.removeBody(s.physicsBody),this.objects.delete(i),!0}return!1}raycastObject(t){for(const[e,n]of this.objects)if(n.mesh&&n.type!=="door_top"&&t.intersectObject(n.mesh,!0).length>0)return n;return null}isPositionOccupied(t,e,n){const i=`${t},${e},${n}`;return this.objects.has(i)}sleep(t){return t?(t.skipToMorning(),!0):!1}openChest(t,e,n){const i=this.getObject(t,e,n);return i&&i.type===71?(i.mesh.userData.lid&&(i.mesh.userData.lid.rotation.x=-Math.PI/4),i.mesh.userData.lock&&(i.mesh.userData.lock.position.z=.35,i.mesh.userData.lock.position.y=.7),i.data.inventory):null}closeChest(t,e,n){const i=this.getObject(t,e,n);i&&i.type===71&&(i.mesh.userData.lid&&(i.mesh.userData.lid.rotation.x=0),i.mesh.userData.lock&&(i.mesh.userData.lock.position.z=.45,i.mesh.userData.lock.position.y=.5))}}const Tc=Math.sqrt(3),ev=.5*(Tc-1),us=(3-Tc)/6,nv=1/3,pn=1/6,_s=r=>Math.floor(r)|0,Il=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),no=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Ac(r=Math.random){const t=Rc(r),e=new Float64Array(t).map(i=>Il[i%12*2]),n=new Float64Array(t).map(i=>Il[i%12*2+1]);return function(s,o){let a=0,l=0,c=0;const h=(s+o)*ev,d=_s(s+h),u=_s(o+h),p=(d+u)*us,g=d-p,_=u-p,m=s-g,f=o-_;let v,y;m>f?(v=1,y=0):(v=0,y=1);const M=m-v+us,A=f-y+us,w=m-1+2*us,C=f-1+2*us,O=d&255,S=u&255;let b=.5-m*m-f*f;if(b>=0){const U=O+t[S],L=e[U],P=n[U];b*=b,a=b*b*(L*m+P*f)}let D=.5-M*M-A*A;if(D>=0){const U=O+v+t[S+y],L=e[U],P=n[U];D*=D,l=D*D*(L*M+P*A)}let F=.5-w*w-C*C;if(F>=0){const U=O+1+t[S+1],L=e[U],P=n[U];F*=F,c=F*F*(L*w+P*C)}return 70*(a+l+c)}}function Cc(r=Math.random){const t=Rc(r),e=new Float64Array(t).map(s=>no[s%12*3]),n=new Float64Array(t).map(s=>no[s%12*3+1]),i=new Float64Array(t).map(s=>no[s%12*3+2]);return function(o,a,l){let c,h,d,u;const p=(o+a+l)*nv,g=_s(o+p),_=_s(a+p),m=_s(l+p),f=(g+_+m)*pn,v=g-f,y=_-f,M=m-f,A=o-v,w=a-y,C=l-M;let O,S,b,D,F,U;A>=w?w>=C?(O=1,S=0,b=0,D=1,F=1,U=0):A>=C?(O=1,S=0,b=0,D=1,F=0,U=1):(O=0,S=0,b=1,D=1,F=0,U=1):w<C?(O=0,S=0,b=1,D=0,F=1,U=1):A<C?(O=0,S=1,b=0,D=0,F=1,U=1):(O=0,S=1,b=0,D=1,F=1,U=0);const L=A-O+pn,P=w-S+pn,I=C-b+pn,K=A-D+2*pn,k=w-F+2*pn,V=C-U+2*pn,$=A-1+3*pn,J=w-1+3*pn,j=C-1+3*pn,q=g&255,Z=_&255,rt=m&255;let dt=.6-A*A-w*w-C*C;if(dt<0)c=0;else{const pt=q+t[Z+t[rt]];dt*=dt,c=dt*dt*(e[pt]*A+n[pt]*w+i[pt]*C)}let ft=.6-L*L-P*P-I*I;if(ft<0)h=0;else{const pt=q+O+t[Z+S+t[rt+b]];ft*=ft,h=ft*ft*(e[pt]*L+n[pt]*P+i[pt]*I)}let Tt=.6-K*K-k*k-V*V;if(Tt<0)d=0;else{const pt=q+D+t[Z+F+t[rt+U]];Tt*=Tt,d=Tt*Tt*(e[pt]*K+n[pt]*k+i[pt]*V)}let Ct=.6-$*$-J*J-j*j;if(Ct<0)u=0;else{const pt=q+1+t[Z+1+t[rt+1]];Ct*=Ct,u=Ct*Ct*(e[pt]*$+n[pt]*J+i[pt]*j)}return 32*(c+h+d+u)}}function Rc(r){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(r()*(256-n)),s=e[n];e[n]=e[i],e[i]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function Dl(r){let t=r>>>0;return function(){t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class iv{constructor({world:t,player:e,inventory:n,dayNightManager:i,placeableObjects:s}){this.world=t,this.player=e,this.inventory=n,this.dayNightManager=i,this.placeableObjects=s,this.storageKey="minacraft.save.v1"}ensureSeed(){return this.world?((!this.world.seed||this.world.seed===0)&&(this.world.seed=Date.now()^Math.random()*1e9|0),this.world.seed|0):0}applySeed(t){const e=t|0;if(!this.world)return;this.world.seed=e;const n=Dl(e^305419896),i=Dl(e^2271560481);this.world.noise2D=Ac(n),this.world.noise3D=Cc(i)}buildSaveObject(){var e,n,i,s,o,a,l,c,h,d,u,p;const t=this.ensureSeed();return{v:1,ts:Date.now(),world:{seed:t,generationVersion:((e=this.world)==null?void 0:e.generationVersion)??0,edits:(n=this.world)!=null&&n.exportEditsForSave?this.world.exportEditsForSave():{}},player:{pos:(s=(i=this.player)==null?void 0:i.body)!=null&&s.position?[this.player.body.position.x,this.player.body.position.y,this.player.body.position.z]:[0,80,0],yaw:((o=this.player)==null?void 0:o.yaw)??0,pitch:((a=this.player)==null?void 0:a.pitch)??0,health:((l=this.player)==null?void 0:l.health)??null,hunger:((c=this.player)==null?void 0:c.hunger)??null},inventory:{slots:((h=this.inventory)==null?void 0:h.slots)??[],hotbarSlot:((d=this.inventory)==null?void 0:d.hotbarSlot)??0},time:{currentTime:((u=this.dayNightManager)==null?void 0:u.currentTime)??null},objects:(p=this.placeableObjects)!=null&&p.exportState?this.placeableObjects.exportState():[]}}save(){const t=this.buildSaveObject();return localStorage.setItem(this.storageKey,JSON.stringify(t)),t}load(){var s,o,a,l,c,h,d,u,p,g,_,m,f,v,y,M,A,w,C,O,S,b,D,F,U,L,P;const t=localStorage.getItem(this.storageKey);if(!t)return null;const e=JSON.parse(t);if(!e||e.v!==1)return null;if(this.applySeed(((s=e.world)==null?void 0:s.seed)??0),(o=this.world)!=null&&o.clearAllChunks&&this.world.clearAllChunks(),(a=this.world)!=null&&a.setEditsFromSave&&this.world.setEditsFromSave(((l=e.world)==null?void 0:l.edits)??{}),(c=this.placeableObjects)!=null&&c.importState&&this.placeableObjects.importState(e.objects??[]),this.inventory&&(this.inventory.slots=Array.isArray((h=e.inventory)==null?void 0:h.slots)?e.inventory.slots:new Array(36).fill(null),this.inventory.hotbarSlot=((d=e.inventory)==null?void 0:d.hotbarSlot)??0,(p=(u=this.inventory.uiManager)==null?void 0:u.updateInventoryUI)==null||p.call(u),(_=(g=this.inventory.uiManager)==null?void 0:g.updateHotbarSelection)==null||_.call(g,this.inventory.hotbarSlot)),this.dayNightManager&&((m=e.time)==null?void 0:m.currentTime)!==null&&((f=e.time)==null?void 0:f.currentTime)!==void 0&&this.dayNightManager.setTime(e.time.currentTime),(v=this.player)!=null&&v.body&&Array.isArray((y=e.player)==null?void 0:y.pos)){const[I,K,k]=e.player.pos;this.player.body.position.set(I,K,k),this.player.body.velocity.set(0,0,0)}this.player&&(typeof((M=e.player)==null?void 0:M.yaw)=="number"&&(this.player.yaw=e.player.yaw),typeof((A=e.player)==null?void 0:A.pitch)=="number"&&(this.player.pitch=e.player.pitch),typeof((w=e.player)==null?void 0:w.health)=="number"&&(this.player.health=e.player.health),typeof((C=e.player)==null?void 0:C.hunger)=="number"&&(this.player.hunger=e.player.hunger));const n=((b=(S=(O=this.player)==null?void 0:O.body)==null?void 0:S.position)==null?void 0:b.x)??0,i=((U=(F=(D=this.player)==null?void 0:D.body)==null?void 0:F.position)==null?void 0:U.z)??0;return(P=(L=this.world)==null?void 0:L.update)==null||P.call(L,n,i,0),e}hasSave(){return!!localStorage.getItem(this.storageKey)}clearSave(){localStorage.removeItem(this.storageKey)}}const ke=new rg;ke.background=new xt(8900331);ke.fog=new Co(8900331,20,80);const gi=new $e(85,window.innerWidth/window.innerHeight,.1,1e3);ke.add(gi);const ts=new gc({antialias:!1});ts.setSize(window.innerWidth,window.innerHeight);ts.shadowMap.enabled=!0;ts.shadowMap.type=kl;document.body.appendChild(ts.domElement);document.addEventListener("contextmenu",r=>r.preventDefault());const Lc=new ug(16777215,4473924,.6);Lc.position.set(0,200,0);ke.add(Lc);const Je=new fo(16777215,.8);Je.position.set(50,100,50);Je.castShadow=!0;Je.shadow.mapSize.width=2048;Je.shadow.mapSize.height=2048;Je.shadow.camera.near=.5;Je.shadow.camera.far=200;Je.shadow.camera.left=-50;Je.shadow.camera.right=50;Je.shadow.camera.top=50;Je.shadow.camera.bottom=-50;Je.shadow.bias=-5e-4;ke.add(Je);const ln=new N_;ln.gravity.set(0,-25,0);ln.broadphase=new Bi(ln);ln.defaultContactMaterial.friction=0;ln.defaultContactMaterial.restitution=0;const qi=new q_,No=new Y_;No.load();const vn=new K_,be=new j_(vn);vn.setInventory(be);const cn=new W_(ke,No,ln);cn.noise2D=Ac();cn.noise3D=Cc();const Un=new J_(ke),ws=new tv(ke,cn,ln),Ts=new Q_(ke,ln,cn),Pc=new Z_(ke,gi),ae=new X_(ke,gi,ln,qi,cn,be,Pc,Ts,ws,Un),sv=new $_(ke),Yi=new iv({world:cn,player:ae,inventory:be,dayNightManager:Un,placeableObjects:ws});Yi.ensureSeed();Yi.applySeed(cn.seed);ae.updateHealthUI=()=>av();ae.openChest=r=>cv(r);globalThis.__mc={scene:ke,camera:gi,physicsWorld:ln,input:qi,textureManager:No,uiManager:vn,inventory:be,world:cn,player:ae,handManager:Pc,dayNightManager:Un,monsterManager:Ts,placeableObjects:ws};function dr(r){let t=document.getElementById("toast");t||(t=document.createElement("div"),t.id="toast",t.style.position="fixed",t.style.left="50%",t.style.top="20px",t.style.transform="translateX(-50%)",t.style.background="rgba(0,0,0,0.7)",t.style.color="white",t.style.padding="8px 12px",t.style.borderRadius="6px",t.style.fontFamily="monospace",t.style.zIndex="2000",t.style.pointerEvents="none",document.body.appendChild(t)),t.textContent=r,t.style.display="block",clearTimeout(t.__t),t.__t=setTimeout(()=>t.style.display="none",1500)}cn.update(0,0);const Nl=cn.getSurfaceY(0,0);Nl!==null&&(ae.body.position.y=Nl+2,ae.camera.position.y=ae.body.position.y+.6);be.add(4,10);be.add(44,20);be.add(40,10);be.add(11,5);be.add(16,3);document.getElementById("hotbar");const rv=document.getElementById("inventory-screen"),Ic=document.getElementById("chest-screen");let In=!1,gn=!1,Le=null;document.addEventListener("keydown",r=>{if(r.code==="KeyE"&&!gn&&(In=!In,rv.style.display=In?"block":"none",In?(qi.setPointerLockEnabled(!1),vn.updateInventoryUI()):(qi.setPointerLockEnabled(!0),document.body.requestPointerLock())),r.code==="Escape"&&gn&&Nc(),!In&&!gn&&r.key>="1"&&r.key<="9"&&be.selectSlot(parseInt(r.key)-1),r.code==="KeyN"&&!In&&!gn&&(Un.setTime(0),console.log("Час змінено на ніч!")),r.code==="KeyM"&&!In&&!gn){const e=new z(Math.sin(ae.yaw),0,Math.cos(ae.yaw)),n=ae.body.position.x+e.x*5,i=ae.body.position.z+e.z*5,s=Math.floor(ae.body.position.y),o=["zombie","skeleton","creeper"],a=o[Math.floor(Math.random()*o.length)];Ts.spawnMonster(a,new z(n,s,i)),console.log(`✅ Заспавнено ${a} перед вами на висоті ${s}!`)}if(r.code==="KeyD"&&!In&&!gn&&r.ctrlKey&&(Un.setTime(.5),console.log("Час змінено на день!")),r.code==="F5"&&(r.preventDefault(),Yi.save(),dr("Saved ✅")),r.code==="F9"){r.preventDefault();const t=Yi.load();dr(t?"Loaded ✅":"No save found")}});var Ol;(Ol=document.getElementById("save-game-btn"))==null||Ol.addEventListener("click",()=>{Yi.save(),dr("Saved ✅")});var Bl;(Bl=document.getElementById("load-game-btn"))==null||Bl.addEventListener("click",()=>{const r=Yi.load();dr(r?"Loaded ✅":"No save found")});document.getElementById("chest-close").addEventListener("click",Nc);window.addEventListener("resize",()=>{gi.aspect=window.innerWidth/window.innerHeight,gi.updateProjectionMatrix(),ts.setSize(window.innerWidth,window.innerHeight)});let Ul=performance.now();const ov=1/60;function Dc(){requestAnimationFrame(Dc);const r=performance.now(),t=(r-Ul)/1e3;Ul=r,!In&&!gn&&(cn.update(ae.body.position.x,ae.body.position.z,t),ae.update(t),Un.update(t,ae.body.position),Ts.update(t,ae,Un),sv.update(t,{x:ae.body.position.x,z:ae.body.position.z}),ln.step(ov,t,3)),lv(),ts.render(ke,gi)}function av(){const r=document.getElementById("health-bar");if(!r)return;r.innerHTML="";for(let e=0;e<10;e++){const n=document.createElement("div");n.className="heart",e<Math.ceil(ae.health/2)?n.textContent=ae.health-e*2>=2?"❤️":"💔":n.textContent="🖤",r.appendChild(n)}const t=document.getElementById("hunger-bar");if(t){t.innerHTML="";for(let e=0;e<10;e++){const n=document.createElement("div");n.className="food",e<Math.ceil(ae.hunger/2)?n.textContent=ae.hunger-e*2>=2?"🍗":"🦴":n.textContent="⚫",t.appendChild(n)}}}function lv(){const r=document.getElementById("time-display");if(!r)return;const t=Un.getTimeString(),e=Un.getTimeOfDay(),n=e==="night"?"🌙":e==="day"?"☀️":"🌅",i=Ts.monsters.length;r.textContent=`${n} ${t} | 👾 ${i}`}function cv(r){gn=!0,Le=r,Ic.style.display="block",qi.setPointerLockEnabled(!1),ws.openChest(r.position.x,r.position.y,r.position.z),ds()}function Nc(){gn&&(gn=!1,Ic.style.display="none",qi.setPointerLockEnabled(!0),document.body.requestPointerLock(),Le&&ws.closeChest(Le.position.x,Le.position.y,Le.position.z),Le=null)}function ds(){if(!Le)return;const r=document.getElementById("chest-inventory"),t=document.getElementById("chest-player-inventory");if(r){r.innerHTML="";for(let e=0;e<27;e++){const n=Le.data.inventory[e],i=document.createElement("div");i.className="inv-slot",i.dataset.chestIndex=e,n&&vn.renderItem(i,n),i.addEventListener("click",s=>Fl(e,!1,s)),r.appendChild(i)}}if(t){t.innerHTML="";for(let e=0;e<36;e++){const n=be.slots[e],i=document.createElement("div");i.className="inv-slot",i.dataset.playerIndex=e,n&&vn.renderItem(i,n),i.addEventListener("click",s=>Fl(e,!0,s)),t.appendChild(i)}}}function Fl(r,t,e){if(e.shiftKey)if(t){const n=be.slots[r];if(!n)return;const i=Le.data.inventory.findIndex(s=>!s);i!==-1&&(Le.data.inventory[i]={...n},be.slots[r]=null,ds(),vn.updateInventoryUI())}else{const n=Le.data.inventory[r];if(!n)return;be.add(n.type,n.count,{skipUI:!0})&&(Le.data.inventory[r]=null,ds(),vn.updateInventoryUI())}else if(t){const n=be.slots[r];if(!n)return;const i=Le.data.inventory.findIndex(s=>!s);i!==-1&&(Le.data.inventory[i]={type:n.type,count:1},be.consumeSlot(r,1),ds(),vn.updateInventoryUI())}else{const n=Le.data.inventory[r];if(!n)return;be.add(n.type,n.count,{skipUI:!0})&&(Le.data.inventory[r]=null,ds(),vn.updateInventoryUI())}}Dc();
