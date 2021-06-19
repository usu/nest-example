# POC with NestJS

What's implemented so far:
- 2 Entities (camps, perios) with 1:n relationship
- Exposure of GraphQL (\*.resolver.ts) and REST Endpoints (\*.controller.ts)
- Encapsulation of business logic in CRUD service layer (\*.service.ts)
- TypeORM entities (entities/\*.entity.ts)
- DTO for create and update (dto/\*.inputs.ts)

## Backend
Start backend:
```Shell
cd backend
npm i
npm run start
```

### GraphQL Endpoint
GraphQL Playground available at http://localhost:3000/graphql

Try this query, to load all camps and its periods:
```GraphQL
query { camps {
  id,
  __typename,
  name,
  title,
  periods {
    id,
    __typename,
    description
  }
}}
```

Or try this to create a new camp:
```GraphQL
mutation {
  createCamp(createCampInput: { name: "Test camp", title: "My test camp" }) {
    id
    __typename
    name
    title
    motto
  }
}
```

### REST endpoints
REST endpoints are available at:
- http://localhost:3000/camps
- http://localhost:3000/periods



## Frontend
nothing done so far
