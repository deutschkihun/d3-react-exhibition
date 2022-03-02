import React from 'react'
import { margin,width,height } from '../../data';
import { BrushingBoth } from './Brushing/BrushingBoth';
import { BrushingX } from './Brushing/BrushingX';
import { BrushingY } from './Brushing/BrushingY';
import { HighlightingBrushedElement } from './Brushing/HighlightingBrushedElement';
import { HoverBasic } from './Hover/HoverBasic'
import { VizContainer, VizWrapper ,MainTitle, ContainerRef, SmallMessage } from '../../ui-lib/lib'


export const InteractiveChart = () => {

    return (
            <VizWrapper>
                {/* D3 interactive : brushing */}
                    <VizContainer>
                        <MainTitle>D3 interactive : Brushing </MainTitle>
                        <SmallMessage> 
                            Brushing is the interactive specification a one- or two-dimensional selected region using a pointing gesture, such as by 
                            clicking and dragging the mouse. Brushing is often used to select discrete elements, such as dots in a scatterplot or files on a desktop. 
                            It can also be used to zoom-in to a region of interest, or to select continuous regions for cross-filtering data or live histograms.
                            We can control selecting X and Y axis area with brushing box. If you want to remove brusing box, click anywhere outside of brushing box.
                        </SmallMessage>
                        <ContainerRef>
                            <BrushingBoth
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </ContainerRef>

                        <SmallMessage> 
                            In case, we can handle only x axis of brushing box or only y axis of brushing box. Following example can handle only x axis of brusing box.
                        </SmallMessage>
                        <ContainerRef>
                            <BrushingX
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </ContainerRef>

                        <SmallMessage> 
                            Following example, we can handle only y axis of brushing box.
                        </SmallMessage>
                        <ContainerRef>
                            <BrushingY
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </ContainerRef>
                    </VizContainer> 

                {/* D3 interactive : brushing event triggering */}
                    <VizContainer>
                        <MainTitle>D3 interactive : Highlighting brushed element</MainTitle>
                            <SmallMessage>
                                If you highlight the elements included in the brush box, it can help users who look at the data, recognize and understand data more intuitively and conveniently.
                            </SmallMessage>
                            <ContainerRef>
                                <HighlightingBrushedElement
                                    width={width}
                                    height={height}
                                    margin={margin}
                                />
                            </ContainerRef>
                    </VizContainer> 

                {/* D3 interactive : Switching */}
                        <VizContainer>
                            <MainTitle>D3 interactive : Hover </MainTitle>
                            <SmallMessage>
                                Hover is used to select elements that users hover their cursor or mouse over.
                            </SmallMessage>
                            <ContainerRef>
                                <HoverBasic
                                    width={width}
                                    height={height}
                                    margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer> 
            </VizWrapper>
    )
}

