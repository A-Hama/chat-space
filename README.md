# DB設計

## usersテーブル

|column|type|options|
|------|----|------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Associations
- has_many :messages
- has_many :members
- has_many :groups, through :members

## messagesテーブル

|column|type|options|
|------|----|------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Associations
- belongs_to :user
- belongs_to :group

## groupsテーブル

|column|type|options|
|------|----|------|
|name|string|null: false|

### Associations
- has_many :users, through: members
- has_many :messages
- has_many :members

## membersテーブル

|column|type|options|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Associations
- belongs_to :user
- belongs_to :group
