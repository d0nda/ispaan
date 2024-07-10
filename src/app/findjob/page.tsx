import JobAccordion from "@/components/JobAccordion/JobAccordion";
import Container from "@/components/ui/container";
import React from "react";

export default function findjob() {
    return (
        <Container>
        <div>
            <h1 className="text-2xl font-bold text-center mt-10 mb-8">Find Jobs Here</h1>
            <JobAccordion />
        </div>
        </Container>
    )
}
