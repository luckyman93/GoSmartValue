﻿using AV.Contracts.Enums;

namespace AV.Contracts.Models.Basket.Commands
{
    public class CreateBasketItemInputDataCommand
    {
        public int LocationId { get; set; }
        public int? LocalityId { get; set; }
        public int? StreetId { get; set; }
        public string StreetName { get; set; }
        public string PlotNo { get; set; }
        public int PlotSize { get; set; }
        public Metric PlotSizeMetric { get; set; }
        public Zoning Zoning { get; set; }
        public PropertyType DevelopmentPhase { get; set; }
    }
}