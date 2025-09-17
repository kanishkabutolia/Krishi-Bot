import { useState } from "react";
import {
  Star,
  Phone,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";
import {
  useTranslation,
  Language,
} from "../utils/translations";

interface FeedbackSectionProps {
  language: Language;
}

export function FeedbackSection({
  language,
}: FeedbackSectionProps) {
  const t = useTranslation(language);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      // Here you would typically send the feedback to your backend
      console.log({ rating, feedback });
    }
  };

  const handleEscalate = () => {
    // Simulate escalation to officer
    const escalationMessage =
      language === "hi"
        ? "आपकी जांच कृषि अधिकारी को भेज दी गई है। आपको 30 मिनट के भीतर कॉल आएगी।"
        : language === "ml"
          ? "നിങ്ങളുടെ അന്വേഷണം കാർഷിക ഓഫീസറിലേക്ക് അയച്ചു. 30 മിനിറ്റിനുള്ളിൽ നിങ്ങൾക്ക് കോൾ വരും."
          : "Your query has been escalated to Agricultural Officer. You will receive a call within 30 minutes.";
    alert(escalationMessage);
  };

  if (submitted) {
    return (
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-center justify-center mb-4">
                <ThumbsUp className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl mb-2 text-green-800">
                {t.thankYouFeedback}
              </h3>
              <p className="text-green-700 mb-4">
                {t.feedbackHelpMessage}
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-100"
              >
                {t.provideMoreFeedback}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl mb-4"
            style={{ color: "#205A28" }}
          >
            {t.helpImprove}
          </h2>
          <p className="text-lg text-gray-600">
            {t.feedbackDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Feedback Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle style={{ color: "#205A28" }}>
                {t.rateExperience}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.rateServiceQuestion}
                </label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-colors"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= (hoverRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  {rating > 0 && (
                    <span className="ml-2 text-sm text-gray-600">
                      {rating === 5
                        ? "Excellent"
                        : rating === 4
                          ? "Good"
                          : rating === 3
                            ? "Average"
                            : rating === 2
                              ? "Poor"
                              : "Very Poor"}
                    </span>
                  )}
                </div>
              </div>

              {/* Comment Box */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.additionalComments}
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us more about your experience or suggest improvements..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={rating === 0}
                className="w-full text-white"
                style={{
                  backgroundColor:
                    rating > 0 ? "#205A28" : undefined,
                }}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {t.submitFeedback}
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle style={{ color: "#205A28" }}>
                  {t.needImmediateHelp}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If your query needs urgent attention or you're
                  not satisfied with the automated response,
                  connect directly with our agricultural
                  officers.
                </p>

                <Button
                  onClick={handleEscalate}
                  className="w-full text-white"
                  style={{ backgroundColor: "#C72B32" }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t.escalateOfficer}
                </Button>

                <div className="text-sm text-gray-500 space-y-1">
                  <div>
                    📞 Emergency Helpline: 1800-180-1551
                  </div>
                  <div>
                    🕐 Available 24/7 for urgent queries
                  </div>
                  <div>
                    📱 SMS support: Send 'HELP' to 51969
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌾</div>
                  <h3 className="text-lg mb-2 text-green-800">
                    Community Support
                  </h3>
                  <p className="text-sm text-green-700 mb-4">
                    Join thousands of farmers sharing knowledge
                    and experiences.
                  </p>
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Join Farmer Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}