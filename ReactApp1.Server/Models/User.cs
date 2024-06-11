﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ReactApp1.Server.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public int? Preferences { get; set; }

    public int RoleId { get; set; }

    public string UserPic { get; set; }

    public virtual ICollection<ActionJoint> ActionJoints { get; set; } = new List<ActionJoint>();

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual ICollection<CreditCardInfo> CreditCardInfos { get; set; } = new List<CreditCardInfo>();

    public virtual Role Role { get; set; }
}