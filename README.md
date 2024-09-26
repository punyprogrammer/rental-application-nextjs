# Feature Tracking
## 1.Initial Setup 
   - Create nextjs app
   - Remove boiler plate
   - Create routes
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/1/files
## 2.Setup ShadCN
   - Initialize shadcn 
   ```
    npx shadcn-ui@latest init
   ```
   - Install all components
   - ```
     npx shadcn-ui@latest add button breadcrumb calendar card checkbox dropdown-menu input label popover scroll-area select separator table textarea toast skeleton
     ```
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/2/files
## 3.Setup Navbar Structure
   - Intialise Navbar Structure
   - Install React Icons
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/3/files
## 4.Set Theme and Dark Mode Implementation
   - Override root styles from Next green theme
   - Create a Providers to Wrap all providers
   - Install next-themes
   - Create a ThemeProvider
   - Add button for dark-mode toggle
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/4/files
## 5.Implement Navbar LinksDropdown 
   - Create a dropdown for links in navbar
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/5

## 6.Implement Clerk Login ,Signup and SignOut
   - Integrate Clerk and wrap the Layout with Clerk Provider
   - Use SignIned ,Signout for handling cases
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/6

## 7.FormInput,Button,useFormStatehooks,FormComponent 
   - Build generic FormInput,FormContainer,Button
   - useFormState hook to manage state
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/7

## 8.Integrate Zod for form validations
   - Install zod for validations
   - create a zod schema for user profile validation
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/8

## 9.Setup Prisma and Supabase
   - Create a db instance on supabase
   - Install prisma and create a prisma client
   - Connect with the supabase through prisma
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/9

## 10.Create user profile entry and model 
   - Create a user profile model in db
   - Create a new profile
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/10

## 11.Fetch user profile image and render in Navbar
   - Fetch user info from db and render
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/11/files

## 12.Update user profile page 
   - Update user profile
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/12/files
## 13.Implement image upload functionality in supabase
   - Create Image input component
   - Add zod validation for image input
   - Create supabase bucket for image storage
   - Add Supabase keys in .env
   - Install @supabase/supabase-js
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/13/files

## 14.Implmenting Create Profile functionality 
   - Create property schema
   - Create property action 
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/14/files

## 15.Implement fetch properties action 
   - Create action to fetch all properties with search term and category
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/15/files

## 16.Setup home page
   - Fetch properties on homepage
   - Create card component to properties
   - Add loader
   - Add search component with use debounce
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/16/files

## 17. Implement add to favourites 
   - Create favourites and create relations between profile and property
   - Add a toggle favourite button which shows sign in if the user is logged out
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/17/files

## 18. Implement Property page 
   - Create Image info ,description ,Calender component
   - Add a map component
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/18/files

## 19.Deploy vercel 
   - Modify the build script to handle prisma
   - Setup vercel and add env variables
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/19/files

## 20 Implement Review Funcionality 
   - Create model for reviews
   - Add review input component
   - Add functionality get average and count from prisma
   - MR:  https://github.com/punyprogrammer/rental-application-nextjs/pull/20/files
