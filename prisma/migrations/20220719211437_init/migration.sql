-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
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
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "parent_id" INTEGER NOT NULL,
    "content" VARCHAR NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL,
    "last_edit_date" TIMESTAMP(6),
    "up_count" INTEGER NOT NULL,
    "down_count" INTEGER NOT NULL,
    "is_deleted" INTEGER,
    "submission_id" INTEGER NOT NULL,
    "comment_vote_tracker_id" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment_vote_trackers" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "vote_status" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL,
    "ip_address" VARCHAR(90),
    "vote_value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "comment_vote_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" VARCHAR(100) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "sent_at_date" TIMESTAMP(6),
    "read_at_date" TIMESTAMP(6),
    "viewed_at_date" TIMESTAMP(6),
    "avatar_url" VARCHAR(500) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_contexts" (
    "id" SERIAL NOT NULL,
    "notification_id" INTEGER NOT NULL,

    CONSTRAINT "notification_contexts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subverses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL,
    "subscriber_count" INTEGER NOT NULL,
    "is_private" BOOLEAN NOT NULL,
    "is_authorized_only" BOOLEAN NOT NULL,
    "last_submission_date" TIMESTAMP(6) NOT NULL,
    "created_by" VARCHAR(50),
    "last_update_date" TIMESTAMP(6),

    CONSTRAINT "subverses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submissions" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "content" VARCHAR,
    "creation_date" TIMESTAMP(6) NOT NULL,
    "last_edit_date" TIMESTAMP(6),
    "subverse_name" VARCHAR(20) NOT NULL,
    "type" INTEGER NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "up_count" INTEGER NOT NULL,
    "down_count" INTEGER NOT NULL,
    "thumbail" VARCHAR(150),
    "flair_label" VARCHAR(50),
    "views" DOUBLE PRECISION NOT NULL,
    "is_deleted" BOOLEAN NOT NULL,
    "url" VARCHAR(3000),
    "archive_date" TIMESTAMP(6),

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "submission_vote_trackers" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "vote_status" INTEGER NOT NULL,
    "creation_date" TIMESTAMP(6) NOT NULL,
    "ip_address" VARCHAR(90),
    "vote_value" DOUBLE PRECISION NOT NULL,
    "submission_id" INTEGER NOT NULL,

    CONSTRAINT "submission_vote_trackers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_key" ON "users"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "comments_id_key" ON "comments"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_comment_vote_tracker_id_key" ON "comments"("comment_vote_tracker_id");

-- CreateIndex
CREATE UNIQUE INDEX "comment_vote_trackers_id_key" ON "comment_vote_trackers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "notifications_id_key" ON "notifications"("id");

-- CreateIndex
CREATE UNIQUE INDEX "notification_contexts_id_key" ON "notification_contexts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subverses_id_key" ON "subverses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subverses_name_key" ON "subverses"("name");

-- CreateIndex
CREATE UNIQUE INDEX "submissions_id_key" ON "submissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "submission_vote_trackers_id_key" ON "submission_vote_trackers"("id");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_comment_vote_tracker_id_fkey" FOREIGN KEY ("comment_vote_tracker_id") REFERENCES "comment_vote_trackers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_contexts" ADD CONSTRAINT "notification_contexts_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_subverse_name_fkey" FOREIGN KEY ("subverse_name") REFERENCES "subverses"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "submission_vote_trackers" ADD CONSTRAINT "submission_vote_trackers_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
