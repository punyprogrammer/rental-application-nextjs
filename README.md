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
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/2
## 3.Setup Navbar Structure
   - Intialise Navbar Structure
   - Install React Icons
   - MR: https://github.com/punyprogrammer/rental-application-nextjs/pull/3
## 4.Set Theme and Dark Mode Implementation
   - Override root styles from Next green theme
   - Create a Providers to Wrap all providers
   - Install next-themes
   - Create a ThemeProvider
   - Add button for dark-mode toggle
   - MR : https://github.com/punyprogrammer/rental-application-nextjs/pull/4
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
