﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ReactApp1.Server.Models;

public partial class ModelJoint
{
    public int ModelJointId { get; set; }

    public int ActivityId { get; set; }

    public int ModelId { get; set; }

    public virtual Activity Activity { get; set; }

    public virtual ActivitiesModel Model { get; set; }
}