//never → মানে হলো কখনোই কোনো মান আসবে না। সাধারণত এমন ফাংশনে ব্যবহার হয় যেটা সবসময় error ছুঁড়ে দেয় বা কখনো return করে না।

function fail(msg: string): never {
  throw new Error(msg);
}

fail("kichu to vul hocche!")