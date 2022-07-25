-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'AUDIO', 'LINK');

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
CREATE TABLE "user_preferences" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "lang" VARCHAR(2) NOT NULL,
    "show_presence" BOOLEAN NOT NULL DEFAULT true,
    "video_autoplay" BOOLEAN NOT NULL DEFAULT false,
    "countryCode" VARCHAR(2) NOT NULL,
    "collapse_left_bar" BOOLEAN NOT NULL DEFAULT false,
    "label_nsfw" BOOLEAN NOT NULL DEFAULT false,
    "bad_comment_auto_collapse" BOOLEAN NOT NULL DEFAULT false,
    "nigth_mode" BOOLEAN NOT NULL DEFAULT false,
    "search_include_nsfw" BOOLEAN NOT NULL DEFAULT false,
    "highligth_new_comments" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "user_preferences_pkey" PRIMARY KEY ("id")
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
    "post_id" TEXT NOT NULL,
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
    "last_post_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbnail_url" VARCHAR(500) NOT NULL,
    "color_theme" VARCHAR(20) NOT NULL,
    "user_id" TEXT NOT NULL,
    "last_update_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "member_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "subs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "content" VARCHAR,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_edit_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "sub_id" TEXT NOT NULL,
    "type" "PostType" NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "up_count" INTEGER NOT NULL DEFAULT 0,
    "down_count" INTEGER NOT NULL DEFAULT 0,
    "thumbail" VARCHAR(150),
    "flair_label" VARCHAR(50),
    "views" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "url" VARCHAR(3000),

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_vote_trackers" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "vote_status" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" VARCHAR(90),
    "vote_value" DOUBLE PRECISION NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "post_vote_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_preferences_user_id_key" ON "user_preferences"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_subs_user_id_key" ON "user_subs"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_subs_sub_name_key" ON "user_subs"("sub_name");

-- CreateIndex
CREATE UNIQUE INDEX "comments_user_id_key" ON "comments"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_parent_id_key" ON "comments"("parent_id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_post_id_key" ON "comments"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_comment_vote_tracker_id_key" ON "comments"("comment_vote_tracker_id");

-- CreateIndex
CREATE UNIQUE INDEX "notifications_user_id_key" ON "notifications"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subs_name_key" ON "subs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subs_user_id_key" ON "subs"("user_id");

-- CreateIndex
CREATE INDEX "subs_name_idx" ON "subs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "posts_user_id_key" ON "posts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_sub_id_key" ON "posts"("sub_id");

-- CreateIndex
CREATE UNIQUE INDEX "post_vote_trackers_post_id_key" ON "post_vote_trackers"("post_id");

-- AddForeignKey
ALTER TABLE "user_preferences" ADD CONSTRAINT "user_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subs" ADD CONSTRAINT "user_subs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_subs" ADD CONSTRAINT "user_subs_sub_name_fkey" FOREIGN KEY ("sub_name") REFERENCES "subs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_vote_tracker_id_fkey" FOREIGN KEY ("comment_vote_tracker_id") REFERENCES "comment_vote_trackers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_contexts" ADD CONSTRAINT "notification_contexts_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subs" ADD CONSTRAINT "subs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_sub_id_fkey" FOREIGN KEY ("sub_id") REFERENCES "subs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_vote_trackers" ADD CONSTRAINT "post_vote_trackers_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
