# Chat-Space DB設計
## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
c
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|
|name|string|null: false, add_index: true|
### Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through:  :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, add_index: true|
### Association
- has_many :groups_users
- has_many :messages
- has_many :users, through:  :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
### Association
- belongs_to :group
-belongs_to :user