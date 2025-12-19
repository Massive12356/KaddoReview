import { Review } from '../types/review';

const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    reviewerInfo: {
      companyName: 'TechVentures Capital',
      country: 'United States',
      industry: 'Venture Capital',
      role: 'Managing Partner',
      relationship: 'Investor',
      duration: '3 years',
      logoUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    problemSolution: {
      challenge: 'We needed a reliable partner to help scale our portfolio companies across emerging markets with complex regulatory environments.',
      effectiveness: 'The solution exceeded expectations. They navigated regulatory challenges seamlessly and delivered measurable growth across 5 portfolio companies within 18 months.'
    },
    executionOperational: {
      reliability: 'Consistently delivered on commitments with zero missed deadlines across multiple concurrent projects.',
      professionalism: 'Exceptional professionalism in all interactions. Their team maintained composure during high-pressure situations and demonstrated deep industry expertise.',
      communication: 'Proactive communication with weekly updates, transparent about challenges, and responsive within hours to urgent matters.'
    },
    valueCreation: {
      tangibleResults: 'Generated $4.2M in additional revenue across portfolio companies, reduced operational costs by 23%, and successfully entered 3 new markets ahead of schedule.'
    },
    scalabilityTrust: {
      scalability: 'Demonstrated ability to scale from supporting 2 portfolio companies to 8 simultaneously without quality degradation. Infrastructure and processes are robust.',
      longTermTrust: 'Absolute confidence in long-term partnership. Their strategic thinking and integrity make them our first call for new initiatives.'
    },
    endorsement: {
      recommendationText: 'I wholeheartedly recommend this team to any serious investor or business leader. Their combination of execution excellence, strategic insight, and unwavering integrity is rare. We consider them an essential partner in our success.'
    },
    starRatings: {
      execution: 5,
      professionalism: 5,
      communication: 5,
      valueCreation: 5,
      trust: 5,
      scalability: 5
    },
    submittedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    reviewerInfo: {
      companyName: 'Global Innovation Partners',
      country: 'United Kingdom',
      industry: 'Private Equity',
      role: 'Senior Investment Director',
      relationship: 'Strategic Partner',
      duration: '2 years',
      logoUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    problemSolution: {
      challenge: 'Our portfolio needed operational transformation expertise to improve efficiency and prepare for exit strategies.',
      effectiveness: 'Outstanding results. They identified inefficiencies we had overlooked and implemented solutions that improved EBITDA margins by 18% across the board.'
    },
    executionOperational: {
      reliability: 'Rock-solid reliability. They delivered comprehensive transformation plans on time and managed execution flawlessly.',
      professionalism: 'World-class professionalism. Their team integrated seamlessly with portfolio company leadership and earned trust quickly.',
      communication: 'Exemplary communication practices with detailed reporting, clear escalation paths, and consistent stakeholder updates.'
    },
    valueCreation: {
      tangibleResults: 'Increased portfolio valuation by $12M through operational improvements, successfully exited 2 investments at 2.3x returns, and positioned 3 others for premium exits.'
    },
    scalabilityTrust: {
      scalability: 'Scaled services across 6 portfolio companies with consistent quality. Their methodology and team structure support significant growth.',
      longTermTrust: 'Complete trust in their capabilities and judgment. They have become integral to our investment thesis and due diligence process.'
    },
    endorsement: {
      recommendationText: 'This partnership has been transformative for our fund. Their expertise, execution capability, and strategic partnership approach make them invaluable. Any investor would benefit from working with them.'
    },
    starRatings: {
      execution: 5,
      professionalism: 5,
      communication: 5,
      valueCreation: 5,
      trust: 5,
      scalability: 4
    },
    submittedAt: '2024-02-20T14:15:00Z'
  },
  {
    id: '3',
    reviewerInfo: {
      companyName: 'Horizon Growth Fund',
      country: 'Singapore',
      industry: 'Growth Equity',
      role: 'Partner',
      relationship: 'Co-Investor',
      duration: '1.5 years',
      logoUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    problemSolution: {
      challenge: 'We needed specialized expertise in Asian markets to accelerate growth for our SaaS portfolio companies expanding regionally.',
      effectiveness: 'Highly effective. They brought deep market knowledge and execution capabilities that accelerated our timeline by 9 months.'
    },
    executionOperational: {
      reliability: 'Dependable execution with strong project management. Minor delays occurred but were well-communicated and mitigated.',
      professionalism: 'Professional approach with strong cultural awareness and ability to navigate complex stakeholder environments.',
      communication: 'Good communication overall. Monthly reports were comprehensive, though sometimes I wished for more frequent updates during critical phases.'
    },
    valueCreation: {
      tangibleResults: 'Facilitated market entry for 4 companies, resulting in $2.8M in new ARR, established key partnerships, and reduced customer acquisition costs by 31%.'
    },
    scalabilityTrust: {
      scalability: 'Good scalability demonstrated so far. As they take on more clients, maintaining quality will be important to monitor.',
      longTermTrust: 'Strong trust established. They have proven themselves reliable and I would engage them for future portfolio needs.'
    },
    endorsement: {
      recommendationText: 'A solid partner for investors looking to expand in Asian markets. Their expertise and network are valuable assets. I recommend them for growth-stage companies needing operational and market expertise.'
    },
    starRatings: {
      execution: 4,
      professionalism: 5,
      communication: 4,
      valueCreation: 5,
      trust: 5,
      scalability: 4
    },
    submittedAt: '2024-03-10T09:45:00Z'
  }
];

let reviews: Review[] = [...MOCK_REVIEWS];

export const reviewService = {
  getAllReviews: (): Review[] => {
    return reviews.sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  },

  addReview: (review: Review): void => {
    reviews = [review, ...reviews];
  },

  getAverageRatings: () => {
    if (reviews.length === 0) {
      return {
        execution: 0,
        professionalism: 0,
        communication: 0,
        valueCreation: 0,
        trust: 0,
        scalability: 0,
        overall: 0
      };
    }

    const totals = reviews.reduce(
      (acc, review) => ({
        execution: acc.execution + review.starRatings.execution,
        professionalism: acc.professionalism + review.starRatings.professionalism,
        communication: acc.communication + review.starRatings.communication,
        valueCreation: acc.valueCreation + review.starRatings.valueCreation,
        trust: acc.trust + review.starRatings.trust,
        scalability: acc.scalability + review.starRatings.scalability
      }),
      { execution: 0, professionalism: 0, communication: 0, valueCreation: 0, trust: 0, scalability: 0 }
    );

    const count = reviews.length;
    const averages = {
      execution: totals.execution / count,
      professionalism: totals.professionalism / count,
      communication: totals.communication / count,
      valueCreation: totals.valueCreation / count,
      trust: totals.trust / count,
      scalability: totals.scalability / count,
      overall: 0
    };

    averages.overall = (
      averages.execution +
      averages.professionalism +
      averages.communication +
      averages.valueCreation +
      averages.trust +
      averages.scalability
    ) / 6;

    return averages;
  },

  getOverallRating: (ratings: Partial<{
    execution: number;
    professionalism: number;
    communication: number;
    valueCreation: number;
    trust: number;
    scalability: number;
  }>): number => {
    const values = Object.values(ratings).filter(val => typeof val === 'number') as number[];
    if (values.length === 0) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  }
};
