-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "username" VARCHAR(50) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "phone_number" VARCHAR(20),
    "phone_number_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "two_factor_enabled" BOOLEAN NOT NULL DEFAULT false,
    "access_failed_count" INTEGER NOT NULL DEFAULT 0,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_from_ip" VARCHAR(20) NOT NULL,
    "last_login_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_subs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sub_name" TEXT NOT NULL,
    "is_moderator" BOOLEAN NOT NULL DEFAULT false,
    "is_favorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_subs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "user_id" TEXT NOT NULL,
    "parent_id" INTEGER NOT NULL,
    "content" VARCHAR NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edit_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "up_count" INTEGER NOT NULL,
    "down_count" INTEGER NOT NULL,
    "is_deleted" INTEGER,
    "submission_id" TEXT NOT NULL,
    "comment_vote_tracker_id" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_vote_trackers" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "vote_status" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" VARCHAR(90),
    "vote_value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "comment_vote_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" VARCHAR(100) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "sent_at_date" TIMESTAMP(3),
    "read_at_date" TIMESTAMP(3),
    "viewed_at_date" TIMESTAMP(3),
    "avatar_url" VARCHAR(500) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_contexts" (
    "id" TEXT NOT NULL,
    "notification_id" TEXT NOT NULL,

    CONSTRAINT "notification_contexts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subs" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_private" BOOLEAN NOT NULL,
    "is_authorized_only" BOOLEAN NOT NULL,
    "last_submission_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbnail_url" VARCHAR(500) NOT NULL,
    "color_theme" VARCHAR(20) NOT NULL,
    "user_id" TEXT NOT NULL,
    "last_update_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "member_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "subs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submissions" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "content" VARCHAR,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edit_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "sub_name" VARCHAR(20) NOT NULL,
    "type" INTEGER NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "up_count" INTEGER NOT NULL,
    "down_count" INTEGER NOT NULL,
    "thumbail" VARCHAR(150),
    "flair_label" VARCHAR(50),
    "views" DOUBLE PRECISION NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "url" VARCHAR(3000),
    "archive_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission_vote_trackers" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "vote_status" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" VARCHAR(90),
    "vote_value" DOUBLE PRECISION NOT NULL,
    "submission_id" TEXT NOT NULL,

    CONSTRAINT "submission_vote_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "comments_comment_vote_tracker_id_key" ON "comments"("comment_vote_tracker_id");

-- CreateIndex
CREATE UNIQUE INDEX "subs_name_key" ON "subs"("name");

-- CreateIndex
CREATE INDEX "subs_name_idx" ON "subs"("name");

-- AddForeignKey
ALTER TABLE "user_subs" ADD CONSTRAINT "user_subs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subs" ADD CONSTRAINT "user_subs_sub_name_fkey" FOREIGN KEY ("sub_name") REFERENCES "subs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_vote_tracker_id_fkey" FOREIGN KEY ("comment_vote_tracker_id") REFERENCES "comment_vote_trackers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_contexts" ADD CONSTRAINT "notification_contexts_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subs" ADD CONSTRAINT "subs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_sub_name_fkey" FOREIGN KEY ("sub_name") REFERENCES "subs"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_vote_trackers" ADD CONSTRAINT "submission_vote_trackers_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
