package com.car.Entities

import java.sql.Date

data class User(
        public var id: Int,
        public var name: String,
        public var surname: String,
        public var position: String,
        public var location: String,
        public var hireDate: Date,
        public var email: String,
        public var imageId: String,
)