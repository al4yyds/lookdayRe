﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ReactApp1.Server.Models;

public partial class Role
{
    public int RoleId { get; set; }

    public string Role1 { get; set; }

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}