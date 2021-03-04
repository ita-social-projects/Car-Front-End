package com.car.Entities

import java.sql.Date

data class Message (
        public var id: Int,
        public var text: String,
        public var createdAt: Date,
        public var senderId: Int,
        public var chatId: Int,
        public var sender: User,
        public var chat: Chat,
)