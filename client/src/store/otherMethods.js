import jwt from "jsonwebtoken";
// import { adminSignout } from "../redux/apiCalls";
import CryptoJS from "crypto-js";

//Creating cookie to monitor login
const createCookie = (cookieName, cookieValue, hourToExpire) => {
  document.cookie = `${cookieName}=${cookieValue}; max-age=${
    hourToExpire * 60 * 60 * 1000
  }`;
  // let date = new Date();
  // date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000);
  // document.cookie =
  //   cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
};

//Get Cookie
const getCookie = (name) => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  } else {
    return -1;
  }
};

const createSessionValue = (name, value) => {
  sessionStorage[name] = value;
};
const getSessionValue = (name) => {
  try {
    return sessionStorage[name];
  } catch (err) {
    return -1;
  }
};

//Create login token
const JWTLoginToken = () => {
  return jwt.sign(
    {
      id: "focM5005",
    },
    "codingShifu@KAwU20232",
    { expiresIn: "3d" }
  );
};

//Create login token
const JWTSessionToken = () => {
  return jwt.sign(
    {
      id: "focM5005",
    },
    "codingShifu@KAwU20642",
    { expiresIn: "5h" }
  );
};

export const createLoginCookie = () =>
  createCookie("focm5005", JWTLoginToken(), 60);

// export const checkLoginCookie = (dispatch) => {
//   try {
//     const cookie = getCookie("focm5005");
//     if (cookie === -1) {
//       console.log("User Not Logged In");
//       adminSignout(dispatch);
//     } else {
//       jwt.verify(cookie, "codingShifu@KAwU20232", (err, opt) => {
//         if (err) {
//           console.log("Malicious Activity Detected", err);
//           adminSignout(dispatch);
//         } else {
//           if (opt.id === "focM5005") {
//             // console.log("coooooookie");
//           } else {
//             console.log("Malicious Activity Detected");
//             adminSignout(dispatch);
//           }
//         }
//       });
//     }
//   } catch (error) {
//     adminSignout(dispatch);
//   }
// };

export const createSessionId = () =>
  createSessionValue("focm6006", JWTSessionToken());

// export const checkSessionId = (navigate, page) => {
//   try {
//     // console.log(page);
//     const sessionId = getSessionValue("focm6006");
//     if (sessionId === -1) {
//       if (page !== "sessionAuth") {
//         navigate("/sessionAuth");
//       } else {
//         return;
//       }
//     } else {
//       jwt.verify(sessionId, "codingShifu@KAwU20642", (err, opt) => {
//         if (err) {
//           if (page === "sessionAuth") {
//             return;
//           } else {
//             return navigate("/sessionAuth");
//           }
//         } else {
//           if (opt.id === "focM5005") {
//             page === "sessionAuth" && navigate("/home");
//             // toHome && navigate(-1);
//           } else {
//             if (page === "sessionAuth") {
//               return;
//             } else {
//               return navigate("/sessionAuth");
//             }
//           }
//         }
//       });
//     }
//   } catch (error) {
//     navigate("/sessionAuth");
//   }
// };

export const checkSession = () => {
  try {
    // console.log(page);
    const sId = getSessionValue("focm6006");
    // console.log(sId);
    if (sId === -1) {
      return false;
    } else {
      // return true;
      const res = jwt.verify(sId, "codingShifu@KAwU20642", (err, opt) => {
        if (err) {
          return false;
        } else {
          if (opt.id === "focM5005") {
            return true;
          } else {
            return false;
          }
        }
      });
      return res;
    }
  } catch (error) {
    return false;
  }
};

export const clearSiteData = () => {
  sessionStorage.clear();

  localStorage.clear();

  caches.keys().then((keys) => {
    keys.forEach((key) => caches.delete(key));
  });

  indexedDB.databases().then((dbs) => {
    dbs.forEach((db) => indexedDB.deleteDatabase(db.name));
  });

  const cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }

  console.log("catch cleared");
};

//encryption
export const encryptIdText = (txt) => {
  try {
    const ciphertext = CryptoJS.AES.encrypt(txt, "c_ShIFu").toString();
    if (ciphertext.includes("/")) {
      return ciphertext.replace(/\//g, "_");
    } else {
      return ciphertext;
    }
  } catch (error) {
    console.error("Encryption Error", error);
    return 0;
  }
};

//decryption
export const decryptIdText = (txt) => {
  try {
    if (txt === null || txt === "") {
      return -1;
    } else {
      if (txt.includes("_")) {
        const bytes = CryptoJS.AES.decrypt(txt.replace(/_/g, "/"), "c_ShIFu");
        return bytes.toString(CryptoJS.enc.Utf8);
      } else {
        const bytes = CryptoJS.AES.decrypt(txt, "c_ShIFu");
        return bytes.toString(CryptoJS.enc.Utf8);
      }
    }
  } catch (error) {
    console.error("Decryption Error", error);
    return -1;
  }
};

//Validating Emails
export const validateEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email?.match(validRegex)) {
    return true;
  } else {
    return false;
  }
};

//validating phone numbers
export const validatePhoneNumber1 = (num) => {
  const validRegx =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (num?.match(validRegx)) {
    return true;
  } else {
    return false;
  }
  /* 
^\s*                #Line start, match any whitespaces at the beginning if any.
(?:\+?(\d{1,3}))?   #GROUP 1: The country code. Optional.
[-. (]*             #Allow certain non numeric characters that may appear between the Country Code and the Area Code.
(\d{3})             #GROUP 2: The Area Code. Required.
[-. )]*             #Allow certain non numeric characters that may appear between the Area Code and the Exchange number.
(\d{3})             #GROUP 3: The Exchange number. Required.
[-. ]*              #Allow certain non numeric characters that may appear between the Exchange number and the Subscriber number.
(\d{4})             #Group 4: The Subscriber Number. Required.
(?: *x(\d+))?       #Group 5: The Extension number. Optional.
\s*$                #Match any ending whitespaces if any and the end of string.
*/
};

export const validatePhoneNumber2 = (num) => {
  const validRegx =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  if (num?.slice(0, 1) !== "+") {
    return false;
  } else {
    if (num?.match(validRegx)) {
      return true;
    } else {
      return false;
    }
  }
};

//Modifying date string
export const getDateTimeStr = (date) => {
  const arr = new Date(date).toString().split(" ").slice(0, 5);
  const str = `${arr[0]}, ${arr[1]} ${arr[2]} ${arr[3]}, ${arr[4]} Hrs`;
  if (str.toLowerCase().includes("undefined")) {
    return "---";
  } else {
    return str;
  }
};

//Copying items to clipboard
const copyHandler = async (txt) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(txt);
  } else {
    return document.execCommand("copy", true, txt);
  }
};

export const copyToClipboard = (txt, _for, enqueueSnackbar) => {
  copyHandler(txt)
    .then(() => {
      console.log(`${_for} copied to clipboard`);
      enqueueSnackbar &&
        enqueueSnackbar(`${_for} copied to clipboard`, { variant: "success" });
    })
    .catch((err) => {
      console.log(err);
      enqueueSnackbar && enqueueSnackbar("Copy Failed", { variant: "error" });
    });
};
