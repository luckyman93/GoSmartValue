﻿using System;
using Microsoft.AspNetCore.Identity;

namespace AV.Common.Entities
{
    public class UserRole : IdentityUserRole<Guid>
    {
        public virtual User User { get; set; }
        public virtual Role Role { get; set; }
    }
}