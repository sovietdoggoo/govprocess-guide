import { useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ChevronLeft, CheckCircle2, Circle, AlertCircle, FileText, DollarSign, Clock, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { processes } from '@/lib/processes';

export default function ProcessDetail() {
  const [, params] = useRoute('/process/:id');
  const [, navigate] = useLocation();
  const [checkedDocs, setCheckedDocs] = useState<Set<number>>(new Set());
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());

  const processId = params?.id;
  const process = processes.find(p => p.id === processId);

  if (!process) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
          <div className="container py-4">
            <button onClick={() => navigate('/')} className="text-primary hover:underline flex items-center gap-2">
              <ChevronLeft className="h-5 w-5" /> Back
            </button>
          </div>
        </header>
        <main className="container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Process not found</h1>
            <Button onClick={() => navigate('/')}>Go back home</Button>
          </div>
        </main>
      </div>
    );
  }

  const toggleDocChecked = (index: number) => {
    const newSet = new Set(checkedDocs);
    if (newSet.has(index)) newSet.delete(index);
    else newSet.add(index);
    setCheckedDocs(newSet);
  };

  const toggleStepChecked = (index: number) => {
    const newSet = new Set(checkedSteps);
    if (newSet.has(index)) newSet.delete(index);
    else newSet.add(index);
    setCheckedSteps(newSet);
  };

  const docsProgress = Math.round((checkedDocs.size / process.documents_required.length) * 100);
  const stepsProgress = Math.round((checkedSteps.size / process.steps.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4">
          <button onClick={() => navigate('/')} className="text-primary hover:underline flex items-center gap-2 mb-4">
            <ChevronLeft className="h-5 w-5" /> Back
          </button>
          <h1 className="text-2xl font-bold text-primary">{process.name}</h1>
        </div>
      </header>

      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is it */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What is this service?</h2>
              <p className="text-muted-foreground leading-relaxed">{process.what_is_it}</p>
            </section>

            {/* Who can apply */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who can apply?</h2>
              <p className="text-muted-foreground leading-relaxed">{process.who_can_apply}</p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
              <ul className="space-y-2">
                {process.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Documents Required */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6" /> Documents Required
              </h2>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Progress: {docsProgress}% collected</span>
                  <span className="text-sm font-medium text-muted-foreground">{checkedDocs.size} of {process.documents_required.length}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${docsProgress}%` }}></div>
                </div>
              </div>
              <div className="space-y-3">
                {process.documents_required.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={checkedDocs.has(idx)}
                        onCheckedChange={() => toggleDocChecked(idx)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{doc.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                        <p className="text-sm text-primary mt-2">Where to get: {doc.where_to_get}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fees */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6" /> Fees
              </h2>
              <div className="space-y-3">
                {process.fees.map((fee, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-card">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{fee.description}</span>
                      <span className="font-bold text-foreground">{fee.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processing Time */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6" /> Processing Time
              </h2>
              <div className="p-4 rounded-lg border border-border bg-card">
                <p className="text-muted-foreground">{process.processing_time}</p>
              </div>
            </section>

            {/* Steps to Apply */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Steps to Apply</h2>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Progress: {stepsProgress}% completed</span>
                  <span className="text-sm font-medium text-muted-foreground">{checkedSteps.size} of {process.steps.length}</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${stepsProgress}%` }}></div>
                </div>
              </div>
              <div className="space-y-4">
                {process.steps.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => toggleStepChecked(idx)}
                          className="transition-all"
                        >
                          {checkedSteps.has(idx) ? (
                            <CheckCircle2 className="h-6 w-6 text-accent" />
                          ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">Step {step.number}: {step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-destructive" /> Common Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                {process.common_mistakes.map((mistake, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                    <h4 className="font-bold text-foreground mb-2">{mistake.mistake}</h4>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Consequence:</strong> {mistake.consequence}</p>
                    <p className="text-sm text-muted-foreground"><strong>How to avoid:</strong> {mistake.how_to_avoid}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Rejection Reasons */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Common Rejection Reasons</h2>
              <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
                <ul className="space-y-2">
                  {process.common_rejection_reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Official Link */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold text-foreground mb-4">Official Portal</h3>
                <a
                  href={process.official_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium text-sm"
                >
                  <Link2 className="h-4 w-4" />
                  {process.official_link_text}
                </a>
              </div>

              {/* Quick Stats */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold text-foreground mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Documents Needed</p>
                    <p className="font-bold text-foreground">{process.documents_required.length}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Application Steps</p>
                    <p className="font-bold text-foreground">{process.steps.length}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Processing Time</p>
                    <p className="font-bold text-foreground text-xs">{process.processing_time}</p>
                  </div>
                </div>
              </div>

              {/* Checklist Progress */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold text-foreground mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Documents</span>
                      <span className="text-sm font-bold text-foreground">{docsProgress}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${docsProgress}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Steps</span>
                      <span className="text-sm font-bold text-foreground">{stepsProgress}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${stepsProgress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready to Apply */}
              {docsProgress === 100 && stepsProgress === 100 && (
                <div className="p-6 rounded-lg border border-accent bg-accent/5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    <h3 className="font-bold text-foreground">Ready to Apply!</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">You have completed all the preparations. Click the button below to visit the official portal.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
