export async function up(db) {
  await db.schema
    .createTable('user')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('username', 'varchar(50)', (col) => col.notNull().unique())
    .addColumn('first_name', 'varchar(255)', (col) => col.notNull())
    .addColumn('last_name', 'varchar', (col) => col.notNull())
    .addColumn('gender', 'integer', (col) => col.notNull())
    .addColumn('password_hash', 'varchar(255)', (col) => col.notNull())
    .addColumn('email', 'varchar(255)', (col) => col.notNull().unique())
    .addColumn('email_confirmed', 'boolean', (col) => col.notNull())
    .addColumn('phone_number', 'varchar(20)', (col) => col.notNull().unique())
    .addColumn('phone_number_confirmed', 'boolean', (col) => col.notNull())
    .addColumn('two_factor_enabled', 'boolean', (col) => col.notNull())
    .addColumn('access_failed_count', 'boolean', (col) => col.notNull())
    .addColumn('registration_date', 'timestamp', (col) => col.notNull())
    .addColumn('last_login_from_ip', 'varchar(20)', (col) => col.notNull())
    .addColumn('last_login_date', 'varchar(20)', (col) => col.notNull())
    .execute()

  await db.schema
    .createTable('notification')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('title', 'varchar(100)', (col) => col.notNull())
    .addColumn('user_id', 'integer', (col) =>
      col.references('user.id').onDelete('cascade').notNull()
    )
    .addColumn('content', 'varchar(100)', (col) => col.notNull())
    .addColumn('url', 'varchar(500)', (col) => col.notNull())
    .addColumn('sent_at_date', 'timestamp')
    .addColumn('read_at_date', 'timestamp')
    .addColumn('viewed_at_date', 'timestamp')
    .addColumn('avatar_url', 'varchar(500)', (col) => col.notNull())
    .execute()

  await db.schema
    .createTable('notification_context')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('notification_id', 'integer', (col) =>
      col.references('notification.id').onDelete('cascade').notNull()
    )
    .execute()

  await db.schema
    .createTable('subverse')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('name', 'varchar(20)', (col) => col.notNull().unique())
    .addColumn('title', 'varchar(100)', (col) => col.notNull())
    .addColumn('description', 'varchar(500)', (col) => col.notNull())
    .addColumn('creation_date', 'timestamp', (col) => col.notNull())
    .addColumn('subscriber_count', 'integer', (col) => col.notNull())
    .addColumn('is_private', 'boolean', (col) => col.notNull())
    .addColumn('is_authorized_only', 'boolean', (col) => col.notNull())
    .addColumn('last_submission_date', 'timestamp', (col) => col.notNull())
    .addColumn('created_by', 'varchar(50)')
    .addColumn('last_update_date', 'timestamp')
    .execute()

  await db.schema
    .createTable('submission')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('username', 'varchar(50)', (col) => col.notNull())
    .addColumn('content', 'varchar')
    .addColumn('creation_date', 'timestamp', (col) => col.notNull())
    .addColumn('last_edit_date', 'timestamp')
    .addColumn('subverse_name', 'varchar(20)', (col) =>
      col.references('subverse.name').onDelete('cascade').notNull()
    )
    .addColumn('type', 'integer', (col) => col.notNull())
    .addColumn('title', 'varchar(200)', (col) => col.notNull())
    .addColumn('up_count', 'integer', (col) => col.notNull())
    .addColumn('down_count', 'integer', (col) => col.notNull())
    .addColumn('thumbail', 'varchar(150)')
    .addColumn('flair_label', 'varchar(50)')
    .addColumn('views', 'double precision', (col) => col.notNull())
    .addColumn('is_deleted', 'boolean', (col) => col.notNull())
    .addColumn('url', 'varchar(3000)')
    .addColumn('archive_date', 'timestamp')
    .execute()

  await db.schema
    .createTable('comment')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('username', 'varchar(50)', (col) => col.notNull())
    .addColumn('parent_id', 'integer', (col) =>
      col.references('comment.id').onDelete('no action').notNull()
    )
    .addColumn('content', 'varchar', (col) => col.notNull())
    .addColumn('creation_date', 'timestamp', (col) => col.notNull())
    .addColumn('last_edit_date', 'timestamp')
    .addColumn('submission_id', 'integer', (col) =>
      col.references('submission.id').onDelete('cascade').notNull()
    )
    .addColumn('up_count', 'integer', (col) => col.notNull())
    .addColumn('down_count', 'integer', (col) => col.notNull())
    .addColumn('is_deleted', 'integer')
    .execute()

  await db.schema
    .createTable('comment_vote_tracker')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('comment_id', 'integer', (col) =>
      col.references('comment.id').onDelete('cascade').notNull()
    )
    .addColumn('username', 'varchar(50)', (col) => col.notNull())
    .addColumn('vote_status', 'integer', (col) => col.notNull())
    .addColumn('creation_date', 'timestamp', (col) => col.notNull())
    .addColumn('ip_address', 'varchar(90)')
    .addColumn('vote_value', 'double precision', (col) => col.notNull())
    .execute()

  await db.schema
    .createTable('submission_vote_tracker')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('submission_id', 'integer', (col) =>
      col.references('submission.id').onDelete('cascade').notNull()
    )
    .addColumn('username', 'varchar(50)', (col) => col.notNull())
    .addColumn('vote_status', 'integer', (col) => col.notNull())
    .addColumn('creation_date', 'timestamp', (col) => col.notNull())
    .addColumn('ip_address', 'varchar(90)')
    .addColumn('vote_value', 'double precision', (col) => col.notNull())
    .execute()

  await db.schema
    .createIndex('notification_user_id_index')
    .on('notification')
    .column('user_id')
    .execute()

  await db.schema
    .createIndex('notification_context_notification_id_index')
    .on('notification_context')
    .column('notification_id')
    .execute()

  await db.schema
    .createIndex('submission_subverse_name_index')
    .on('submission')
    .column('subverse_name')
    .execute()

  await db.schema
    .createIndex('comment_parent_id_index')
    .on('comment')
    .column('parent_id')
    .execute()

  await db.schema
    .createIndex('comment_submission_id_index')
    .on('comment')
    .column('submission_id')
    .execute()

  await db.schema
    .createIndex('comment_vote_tracker_comment_id_index')
    .on('comment_vote_tracker')
    .column('comment_id')
    .execute()

  await db.schema
    .createIndex('submission_vote_tracker_submission_id_index')
    .on('submission_vote_tracker')
    .column('submission_id')
    .execute()
}

export async function down(db) {
  await db.schema.dropTable('user').execute()
  await db.schema.dropTable('notification').execute()
  await db.schema.dropTable('notification_context').execute()
  await db.schema.dropTable('subverse').execute()
  await db.schema.dropTable('submission').execute()
  await db.schema.dropTable('comment').execute()
  await db.schema.dropTable('comment_vote_tracker').execute()
  await db.schema.dropTable('submission_vote_tracker').execute()
}
