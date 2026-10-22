// Task One
// আসন্ন ইদ উপলক্ষে তুমি তোমার দোকানের প্রোডাক্টে ডিসকাউণ্ট দিতে চাচ্ছ। কিন্তু প্রতিটা প্রোডাক্টের নতুন দাম আলাদা আলাদা হিসাব করতে গেলে ঝামেলা। তাই তুমি একটা ফাংশন বানাতে চাও, যা মূল দাম এবং ডিসকাউন্ট% নিলে নতুন দাম বের করে দেবে।

function newPrice(price, discount) {
  if (typeof price !== "number" || discount < 0 || discount > 100) {
    return "invalid input";
  } else {
    const discountPercentage = discount / 100;
    const discountedPrice = price * discountPercentage;
    const newPrice = price - discountedPrice;

    return newPrice.toFixed(3);
  }
}

const discountedPrice = newPrice(2000, 15.5);
console.log(discountedPrice);

// Task Two
// Zapshift কোম্পানি তাদের প্রোডাক্ট ডেলিভারি করার সময় OTP পাঠায়। কিন্তু কিছু লোক Fraud OTP ব্যবহার করে প্রোডাক্ট রিসিভ করে ফেলে। তাই তোমার কাজ হলো একটি ফাংশন বানানো, যা OTP সঠিক কিনা চেক করবে।

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "invalid";
  } else {
    if (otp.startsWith("ph") && otp.length === 8) {
      return true;
    } else {
      return false;
    }
  }
}

const otpResult = validOtp([12345678]);
console.log(otpResult);

// Task Three
// BCS পরীক্ষার OMR sheet ডিজিটালভাবে চেক করা হয়। এটা right, wrong, missed সব কটি গণনা করতে পারে, কিন্তু ফাইনাল স্কোর বের করতে পারে না। তোমার কাজ হলো একটি ফাংশন বানানো যা Object নেবে এবং ফাইনাল স্কোর ক্যালকুলেট করবে।

function finalScore(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return "invalid";
  }

  const marks = obj.right + obj.wrong + obj.skip;
  if (marks !== 100) {
    return "invalid";
  } else {
    const rightMarks = obj.right;
    const wrongMarks = obj.wrong * 0.5;

    const finalScore = Math.round(rightMarks - wrongMarks);
    return finalScore;
  }
}

const obj = ["Raj"];
const result = finalScore(obj);
console.log(result);

// Task Four
// আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।

function gonoVote(arr) {
  let ha = 0;
  let na = 0;

  if (Array.isArray(arr) !== true) {
    return "invalid";
  }

  for (const item of arr) {
    if (item === "ha") {
      ha++;
    } else if (item === "na") {
      na++;
    }
  }

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}

const arr = ["ha", "ha", "ha", "na"];
const voteResult = gonoVote(arr);
console.log(voteResult);

// Task Five
// জিহাদ একটি AI কোম্পানিতে কাজ করে। অনেক সময় ইউজাররা অনেক বড় লেখা (text) ইনপুট দেয়। এত বড় লেখা নিয়ে কাজ করতে AI-এর বেশি সময় লাগে। তাই জিহাদ এমন একটি ফাংশন বানাতে চায়, যা বড় টেক্সটকে একটু ছোট করে বিশ্লেষণ করতে সাহায্য করবে।

function analyzeText(str) {
  if (typeof str !== "string") {
    return "invalid";
  } else {
    const words = str.split(" ");
    const obj = {};
    let longestWord = words[0];
    for (const word of words) {
      if (longestWord.length < word.length) {
        longestWord = word;
      }
    }

    const sentence = words.join(" ").replace(/ /g, "");

    obj["longWord"] = longestWord;
    obj["token"] = sentence.length;
    return obj;
  }
}

const str = 12345;

const textResult = analyzeText(str);
console.log(textResult);
