import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

const typeDefs = `
# THIS FILE HAS BEEN AUTO-GENERATED BY "PRISMA DEPLOY"
# DO NOT EDIT THIS FILE DIRECTLY

#
# Model Types
#

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
  categoryName: String!
  canMyIdBeReceived: String!
  rewardId: String!
  myId: String!
  uuid: String!
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}


#
# Other Types
#

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput!): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  deleteManyPosts(where: PostWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  categoryName: String!
  canMyIdBeReceived: String!
  rewardId: String!
  myId: String!
  uuid: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
  categoryName: String!
  canMyIdBeReceived: String!
  rewardId: String!
  myId: String!
  uuid: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  categoryName_ASC
  categoryName_DESC
  canMyIdBeReceived_ASC
  canMyIdBeReceived_DESC
  rewardId_ASC
  rewardId_DESC
  myId_ASC
  myId_DESC
  uuid_ASC
  uuid_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  categoryName: String!
  canMyIdBeReceived: String!
  rewardId: String!
  myId: String!
  uuid: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithoutAuthorInput!]
  upsert: [PostUpsertWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
}

input PostUpdateWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  categoryName: String
  categoryName_not: String
  categoryName_in: [String!]
  categoryName_not_in: [String!]
  categoryName_lt: String
  categoryName_lte: String
  categoryName_gt: String
  categoryName_gte: String
  categoryName_contains: String
  categoryName_not_contains: String
  categoryName_starts_with: String
  categoryName_not_starts_with: String
  categoryName_ends_with: String
  categoryName_not_ends_with: String
  canMyIdBeReceived: String
  canMyIdBeReceived_not: String
  canMyIdBeReceived_in: [String!]
  canMyIdBeReceived_not_in: [String!]
  canMyIdBeReceived_lt: String
  canMyIdBeReceived_lte: String
  canMyIdBeReceived_gt: String
  canMyIdBeReceived_gte: String
  canMyIdBeReceived_contains: String
  canMyIdBeReceived_not_contains: String
  canMyIdBeReceived_starts_with: String
  canMyIdBeReceived_not_starts_with: String
  canMyIdBeReceived_ends_with: String
  canMyIdBeReceived_not_ends_with: String
  rewardId: String
  rewardId_not: String
  rewardId_in: [String!]
  rewardId_not_in: [String!]
  rewardId_lt: String
  rewardId_lte: String
  rewardId_gt: String
  rewardId_gte: String
  rewardId_contains: String
  rewardId_not_contains: String
  rewardId_starts_with: String
  rewardId_not_starts_with: String
  rewardId_ends_with: String
  rewardId_not_ends_with: String
  myId: String
  myId_not: String
  myId_in: [String!]
  myId_not_in: [String!]
  myId_lt: String
  myId_lte: String
  myId_gt: String
  myId_gte: String
  myId_contains: String
  myId_not_contains: String
  myId_starts_with: String
  myId_not_starts_with: String
  myId_ends_with: String
  myId_not_ends_with: String
  uuid: String
  uuid_not: String
  uuid_in: [String!]
  uuid_not_in: [String!]
  uuid_lt: String
  uuid_lte: String
  uuid_gt: String
  uuid_gte: String
  uuid_contains: String
  uuid_not_contains: String
  uuid_starts_with: String
  uuid_not_starts_with: String
  uuid_ends_with: String
  uuid_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
  uuid: String
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: UserWhereUniqueInput
  delete: UserWhereUniqueInput
  update: UserUpdateWithoutPostsInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateWithoutPostsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPostsDataInput!
}

input UserUpsertWithoutPostsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export type PostOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC' |
  'categoryName_ASC' |
  'categoryName_DESC' |
  'canMyIdBeReceived_ASC' |
  'canMyIdBeReceived_DESC' |
  'rewardId_ASC' |
  'rewardId_DESC' |
  'myId_ASC' |
  'myId_DESC' |
  'uuid_ASC' |
  'uuid_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  categoryName?: String
  categoryName_not?: String
  categoryName_in?: String[] | String
  categoryName_not_in?: String[] | String
  categoryName_lt?: String
  categoryName_lte?: String
  categoryName_gt?: String
  categoryName_gte?: String
  categoryName_contains?: String
  categoryName_not_contains?: String
  categoryName_starts_with?: String
  categoryName_not_starts_with?: String
  categoryName_ends_with?: String
  categoryName_not_ends_with?: String
  canMyIdBeReceived?: String
  canMyIdBeReceived_not?: String
  canMyIdBeReceived_in?: String[] | String
  canMyIdBeReceived_not_in?: String[] | String
  canMyIdBeReceived_lt?: String
  canMyIdBeReceived_lte?: String
  canMyIdBeReceived_gt?: String
  canMyIdBeReceived_gte?: String
  canMyIdBeReceived_contains?: String
  canMyIdBeReceived_not_contains?: String
  canMyIdBeReceived_starts_with?: String
  canMyIdBeReceived_not_starts_with?: String
  canMyIdBeReceived_ends_with?: String
  canMyIdBeReceived_not_ends_with?: String
  rewardId?: String
  rewardId_not?: String
  rewardId_in?: String[] | String
  rewardId_not_in?: String[] | String
  rewardId_lt?: String
  rewardId_lte?: String
  rewardId_gt?: String
  rewardId_gte?: String
  rewardId_contains?: String
  rewardId_not_contains?: String
  rewardId_starts_with?: String
  rewardId_not_starts_with?: String
  rewardId_ends_with?: String
  rewardId_not_ends_with?: String
  myId?: String
  myId_not?: String
  myId_in?: String[] | String
  myId_not_in?: String[] | String
  myId_lt?: String
  myId_lte?: String
  myId_gt?: String
  myId_gte?: String
  myId_contains?: String
  myId_not_contains?: String
  myId_starts_with?: String
  myId_not_starts_with?: String
  myId_ends_with?: String
  myId_not_ends_with?: String
  uuid?: String
  uuid_not?: String
  uuid_in?: String[] | String
  uuid_not_in?: String[] | String
  uuid_lt?: String
  uuid_lte?: String
  uuid_gt?: String
  uuid_gte?: String
  uuid_contains?: String
  uuid_not_contains?: String
  uuid_starts_with?: String
  uuid_not_starts_with?: String
  uuid_ends_with?: String
  uuid_not_ends_with?: String
  author?: UserWhereInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithoutAuthorInput[] | PostUpdateWithoutAuthorInput
  upsert?: PostUpsertWithoutAuthorInput[] | PostUpsertWithoutAuthorInput
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  categoryName?: String
  canMyIdBeReceived?: String
  rewardId?: String
  myId?: String
  uuid?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
}

export interface UserUpsertWithoutPostsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface PostWhereUniqueInput {
  id?: ID_Input
  uuid?: String
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
  author: UserCreateOneWithoutPostsInput
}

export interface PostUpsertWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpdateWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput
  delete?: UserWhereUniqueInput
  update?: UserUpdateWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface UserUpdateWithoutPostsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPostsDataInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
  categoryName?: String
  canMyIdBeReceived?: String
  rewardId?: String
  myId?: String
  uuid?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  categoryName: String
  canMyIdBeReceived: String
  rewardId: String
  myId: String
  uuid: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
}

export interface AggregateUser {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface PostEdge {
  node: Post
  cursor: String
}

export interface AggregatePost {
  count: Int
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Post[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  post: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createPost: (args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deletePost: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  updateManyPosts: (args: { data: PostUpdateInput, where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPosts: (args: { where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  post: (args: { where?: PostSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Post: (where: PostWhereInput): Promise<boolean> => super.existsDelegate('query', 'posts', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }')
  }

  query: Query = {
    posts: (args, info): Promise<Post[]> => super.delegate('query', 'posts', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    post: (args, info): Promise<Post | null> => super.delegate('query', 'post', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    postsConnection: (args, info): Promise<PostConnection> => super.delegate('query', 'postsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createPost: (args, info): Promise<Post> => super.delegate('mutation', 'createPost', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    updatePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'updatePost', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    deletePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'deletePost', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    upsertPost: (args, info): Promise<Post> => super.delegate('mutation', 'upsertPost', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    updateManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPosts', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    deleteManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPosts', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info)
  }

  subscription: Subscription = {
    post: (args, infoOrQuery): Promise<AsyncIterator<PostSubscriptionPayload>> => super.delegateSubscription('post', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery)
  }
}