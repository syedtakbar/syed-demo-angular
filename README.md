# syed-demo-angular
Angular demo with nx and ngrx

# Here are some of the commands....
 
npx create-nx-workspace@10.3.2 syed-demo-angular --appName=sta-test-app --preset=angular-nest --npmScope=sta --linter=tslint --style=scss --nxcloud=false

nx add @angular/material@10.2.7 --defaults=true --interactive=false &&nx add @ngrx/store@10.0.1 --defaults=true --interactive=false

nx g lib core-data --parent-module=apps/sta-test-app/src/app/app.module.ts  --routing --style=scss

nx g lib core-state --parent-module=apps/sta-test-app/src/app/app.module.ts  --routing --style=scss 

nx g lib material --parent-module=apps/sta-test-app/src/app/app.module.ts  --routing --style=scss

nx g s services/tickets/tickets --project=core-data

nx g c tickets -m app.module.ts --style=scss && nx g c tickets/tickets-list -m app.module.ts --style=scss && nx g c tickets/ticket-details -m app.module.ts --style=scss
