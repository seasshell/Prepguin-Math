npx expo export
vercel --prod
npx expo export
eas build --platform android
git config --global user.email  "email"

git checkout -b gh-pages
 
npx expo export
npm run deploy